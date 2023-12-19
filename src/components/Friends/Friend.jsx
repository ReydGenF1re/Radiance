import React from "react";
import styles from "./Friend.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

export default function Friend({
                                   follow,
                                   followingInProgress,
                                   unfollow,
                                   friend,
                                   key
                               }) {
    return <div className={styles.friend} key={key}>
        <div className={styles.friend__inner}>
            <div className={styles.friend__left}>
                <img className={styles.friend__avatar}
                     src={friend.photos.small ?? userPhoto}
                     alt=""/>
                <div className={styles.friend__info}>
                    <NavLink to={'/profile/' + friend.id}>
                        <span className={styles.friend__name}>{friend.name}</span><br/>
                        <span className={styles.friend__status}>{friend.status ? `"${friend.status}"` : ''}</span>
                    </NavLink>

                </div>
            </div>
            <div className={styles.friend__right}>
                {friend.followed ? <button disabled={followingInProgress.some(id => id === friend.id)}
                                           className={styles.friend__follow_btn}
                                           onClick={() => unfollow(friend)}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === friend.id)}
                              className={styles.friend__follow_btn} onClick={() => follow(friend)}>Follow</button>
                }
            </div>
        </div>
    </div>

}

