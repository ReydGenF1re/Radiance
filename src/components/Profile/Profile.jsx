import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile({profile,status,updateStatus}) {
    return <>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostsContainer profile={profile}
        />
    </>
}
