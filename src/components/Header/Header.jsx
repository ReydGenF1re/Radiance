import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export default function Header({isAuth, login,logout}) {
    return <header className={styles.header}>
        <div className="container">
            <div className={styles.header__inner}>
                <img className={styles.logo} src="../logo.svg" alt="Logo"/>
                {isAuth
                    ? <><button onClick={logout} className={styles.logoutButton}></button> <NavLink className={styles.login} to={'/profile'}>{login}</NavLink>
                    </>
                    : <div className={styles.loginBlock}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>}

                {/*<form className={styles.form}>*/}
                {/*    <input className={styles.form__input} type="text" name="search" placeholder="Search..."/>*/}
                {/*    <button className={styles.form__btn} type="submit"></button>*/}
                {/*</form>*/}
            </div>

        </div>
    </header>

}