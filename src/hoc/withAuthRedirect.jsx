import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth:state.auth.isAuth,
})
const WithAuthRedirect = (Component) => {

        class AuthRedirectComponent extends React.Component{
            render() {
                if(!this.props.isAuth) {return <Navigate to={'/login'}/>}
                return <Component {...this.props} />
            }
        }

    return connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
};
export default WithAuthRedirect
