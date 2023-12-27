import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export default function Profile({profile, status, updateStatus, isOwner, savePhoto,saveProfile}) {
    return <>
        <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} saveProfile={saveProfile}
                     updateStatus={updateStatus}/>
        <MyPostsContainer profile={profile}
        />
    </>
}
