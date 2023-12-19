import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
// const links = ['Home',"News", 'Messages', 'Friends', "Community", "Bookmarks", ]
export default function Navbar(props) {
    return <nav className={styles.nav}>
        <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
                <NavLink className = { ({isActive}) => isActive ? styles.active  : styles.nav__link } to="/profile/">Home</NavLink>
            </li>
            <li className={styles.nav__item}>
                <NavLink className = { ({isActive}) => isActive ? styles.active : styles.nav__link } to="/news">News</NavLink>
            </li>
            <li className={styles.nav__item}>
                <NavLink className = { ({isActive}) => isActive ? styles.active : styles.nav__link } to="/messages">Messages</NavLink>
            </li>
            <li className={styles.nav__item}>
                <NavLink className = { ({isActive}) => isActive ? styles.active : styles.nav__link } to="/friends">Friends</NavLink>
            </li>
            <li className={styles.nav__item}>
                <NavLink className = { ({isActive}) => isActive ? styles.active : styles.nav__link } to="/community">Community</NavLink>
            </li>
            <li className={styles.nav__item}>
                <NavLink className = { ({isActive}) => isActive ? styles.active : styles.nav__link } to="/bookmarks">Bookmarks</NavLink>
            </li>

        </ul>
    </nav>
}