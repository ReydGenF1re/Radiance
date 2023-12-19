import React from "react";
import styles from "./Friends.module.css";
import Paginator from "../../assets/common/Paginator/Paginator";
import Friend from "./Friend";


export default function Friends({
                                    currentPage: curPage,
                                    follow,
                                    followingInProgress,
                                    friends,
                                    onPageChanged,
                                    pageSize,
                                    totalFriendsCount,
                                    unfollow
                                }) {
    return <section className={styles.friends}>
        {friends.map(f => <Friend key={f.id} friend={f} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow } />)}
        <Paginator currentPage={curPage} pageSize={pageSize} totalFriendsCount={totalFriendsCount} onPageChanged={onPageChanged}/>
    </section>
}