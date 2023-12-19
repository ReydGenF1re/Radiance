import React from 'react';
import styles from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../../assets/common/FormsControls/FormsControls";
import {required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from '../../assets/common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.userBox}>
                <CreateField name={'email'} id={'email'} type={'email'} validators={[required]}>Email</CreateField>
            </div>
            <div className={styles.userBox}>
                <CreateField name={'password'} id={'password'} type={'password'} validators={[required]}>Password</CreateField>
            </div>
            <div className={styles.userBox}>
                <CreateField name={'rememberMe'} id={'rememberMe'} type={'checkbox'}>Remember me</CreateField>
            </div>
            {error && <div className={style.summaryError}>{error}</div>}
            <button>
                Submit
            </button>
        </form>)
};
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = ({login,isAuth}) => {
    const onSubmit = ({email, password, rememberMe}) => {
        login(email, password, rememberMe)
    }
    if (isAuth) {
        return <Navigate to="/profile"/>;
    }
    return <section className={styles.loginBox}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </section>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login})(Login);
