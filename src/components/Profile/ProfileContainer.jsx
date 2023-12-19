import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Preloader from "../../assets/common/Preloader/Preloader";

import {compose} from "redux";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.router.params.userID;
        if(!userID) {
            userID = this.props.authorizedUserID;
            if(!userID){
                this.props.router.navigate('/login/')
            }

        }
        userID && this.props.getUserProfile(userID) ;
        userID && this.props.getStatus(userID)

    }

    render() {
        return <>{
            this.props.isFetching ?
                <Preloader/> :
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        }
        </>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
    authorizedUserID:state.auth.userID,
    isAuth:state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)
