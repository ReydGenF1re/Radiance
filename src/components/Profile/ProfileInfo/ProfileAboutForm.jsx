import styles from "./ProfileInfo.module.css";
import React from "react";
import {reduxForm} from "redux-form";
import {CreateField} from "../../../assets/common/FormsControls/FormsControls";
import style from "../../../assets/common/FormsControls/FormControls.module.css";

const ProfileAboutForm = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit} className={styles.profile__aboutDataForm}>
        {error && <div className={style.summaryError}>{error}</div>}

        <p><span className={styles.about__option}>{profile.aboutMe ?? null}</span></p>
        <div className={styles.about__block}>

        <CreateField name={'fullName'} type={'text'} id={'username'}
                         classForLabel={styles.about__label}> Username</CreateField>
        </div>
        <div className={styles.about__block}>
            <CreateField name={'aboutMe'} type={'text'} id={'aboutMe'} classForLabel={styles.about__label}>About
                me</CreateField>
        </div>
        <div className={styles.about__block}>
            <CreateField name={'lookingForAJobDescription'} type={'text'} id={'myProfessionalSkills'}
                         classForLabel={styles.about__label}>My professional skills</CreateField>
        </div>



        <p><span className={styles.about__option}>Contacts</span>: <ul>{Object.keys(profile.contacts).map(key =>
            <div className={styles.about__block}><CreateField classForLabel={styles.about__label} name={`contacts.${key}`} id={key} type={'text'}>{key}</CreateField></div>)}</ul></p>
        <div className={styles.about__block}>
            <CreateField name={'lookingForAJob'} type={'checkbox'} id={'lookingForAJob'}
                         classForLabel={styles.about__label}>Looking for a job</CreateField>
        </div>
        <button type={"submit"} className={styles.about__edit}>Save</button>
    </form>
}
const ProfileAboutReduxForm = reduxForm({form: 'EditProfile'})(ProfileAboutForm)
export default ProfileAboutReduxForm;