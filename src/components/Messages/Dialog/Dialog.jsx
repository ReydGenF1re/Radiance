import React from "react";
import styles from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const Dialog = function ({name, id}) {
    return <li className={styles.dialog__item}>
        <NavLink to={'/messages/' + id}>
            <img className={styles.user__avatar}
                 src="https://i.ytimg.com/vi/vy6ND7afqLo/hqdefault.jpg"
                 alt="Avatar"/>
            <span className={styles.dialog__username}>{name}</span>
        </NavLink>
    </li>
}
export default Dialog;