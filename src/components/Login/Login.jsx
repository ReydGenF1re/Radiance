import React from 'react';
import styles from './Login.module.css'
import {reduxForm} from "redux-form";
import {CreateField} from "../../assets/common/FormsControls/FormsControls";
import {required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from '../../assets/common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error,captchaURL}) => {
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
            {captchaURL && <img alt={'captcha'} src={captchaURL} /> }
            {captchaURL && <CreateField name={'captcha'} type={'text'} validators={[required]}></CreateField> }
            {error && <div className={style.summaryError}>{error}</div>}
            <button>
                Submit
            </button>
        </form>)
};
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = ({login,isAuth,captchaURL,captcha}) => {
    const onSubmit = ({email, password, rememberMe,captcha}) => {
        login(email, password, rememberMe,captcha)
    }
    if (isAuth) {
        return <Navigate to="/profile"/>;
    }
    return <section className={styles.loginBox}>
        <h2>Login</h2>
        <LoginReduxForm captchaURL={captchaURL} onSubmit={onSubmit}/>
    </section>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
})
export default connect(mapStateToProps, {login})(Login);
