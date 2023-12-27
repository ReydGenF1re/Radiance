import React from "react";
import {addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state,ownProps) => {
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts,
        profile:ownProps.profile,
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {

        addPost:(newPostText) => {dispatch(addPostCreator(ownProps.profile.fullName, newPostText))},
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;