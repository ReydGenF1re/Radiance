import React from "react";
import styles from '../Messages.module.css'
const Message = function ({name, data, message}){
    return <div className={styles.message}>
        <div className={styles.message__user}>
            <img className={styles.user__avatar}
                 src="https://i.ytimg.com/vi/vy6ND7afqLo/hqdefault.jpg"
                 alt="Avater"/>
            <div className={styles.user__info}>
                <span className={styles.user__name}>{name}</span>
                <span className={styles.user__data}>{data}</span>
            </div>
        </div>
        <div className={styles.message__text}>
            {message}
        </div>
    </div>}
export default Message;