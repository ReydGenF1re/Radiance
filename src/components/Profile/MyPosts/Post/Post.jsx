import React from "react";
import styles from './Post.module.css';

export default function Post({name, date, message, likes, comments, shares}) {
    return (
        <article className={styles.post}>
            <div className={styles.post__user}>
                <img className={styles.post__ava} src='https://cdn.mos.cms.futurecdn.net/wadCYrEXA7JKngzFMgECzh-1200-80.jpg' alt="Avatar"/>
                <div className={styles.post__userDescr}>
                    <span className={styles.post__username}>{name}</span><br/>
                    <span className={styles.post__time}>{date}</span>
                </div>

            </div>
            <p className={styles.post__text}>{message}</p>
            <div className={styles.post__buttons}>
                <div className={styles.post__like}>
                    <button className={styles.post__btnLike}></button>
                    <span className={styles.post__likes}>{likes}</span>
                </div>
                <div className={styles.post__comment}>
                    <button className={styles.post__btnComment}></button>
                    <span className={styles.post__comments}>{comments}</span>
                </div>
                <div className={styles.post__share}>
                    <button className={styles.post__btnShare}></button>
                    <span className={styles.post__shares}>{shares}</span>
                </div>
            </div>
        </article>
    )
}
