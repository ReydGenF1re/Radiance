import React from "react";
import {connect} from "react-redux";
import {follow, requestFriends, setCurrentPage, toggleFollowing, unfollow,} from "../../redux/friends-reducer";

import Friends from "./Friends";
import Preloader from "../../assets/common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getFriends,
    getIsFetching,
    getPageSize,
    getTotalFriendsCount
} from "../../redux/friends-selectors";

class FriendsComponent extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props;
        getUsers(currentPage, pageSize)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Friends totalFriendsCount={this.props.totalFriendsCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         friends={this.props.friends}
                         onPageChanged={this.onPageChanged}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}/>
            }


        </>
    }
}

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowing,
    getUsers: requestFriends
})(FriendsComponent)