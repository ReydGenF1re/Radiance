import React, {useState} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../../assets/common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAboutForm from "./ProfileAboutForm";

// Socials
import facebook from "../../../assets/icons/facebook.png"
import website from "../../../assets/icons/website.png"
import vk from "../../../assets/icons/vk.png"
import twitter from "../../../assets/icons/twitter.png"
import instagram from "../../../assets/icons/instagram.png"
import youtube from "../../../assets/icons/youtube.png"
import github from "../../../assets/icons/github.png"
import mainLink from "../../../assets/icons/mainLink.png"

export default function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto,saveProfile}) {
    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {

            }
        )
    }

    return <>
        <section className={styles.user}>
            <img className={styles.user__background}
                 src='https://img.freepik.com/premium-photo/palms-exotic-pattern-palm-trees-on-blue-sky-palm-at-tropical-coast-coconut-tree-tropical-backdrop-on-sun-light-sky_265223-30591.jpg'
                 alt="Background: palms"/>


            <label>
                <img className={styles.user__profile}
                     src={profile.photos.large ?? userPhoto}
                     alt="Avatar"/>
                {isOwner && <input type={"file"} onChange={onAvatarSelected} hidden/>}
            </label>
            <div className={styles.user__about}>
                {/*<img className={styles.user__img} src="bg.jpg" alt=""/>*/}
                <h2 className={styles.user__name}>{profile.fullName}</h2>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </section>
        <section className={styles.about}>
            <h2 className={styles.section__title}>About</h2>
            {editMode ? <ProfileAboutForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> :
                <ProfileAbout goToEditMode={() => setEditMode(true)} isOwner={isOwner} profile={profile}/>}
        </section>
    </>
}
const ProfileAbout = ({profile, isOwner, goToEditMode}) => {
    return <div className={styles.profile__aboutData}>
        <p><span className={styles.about__option}>{profile.aboutMe ?? null}</span></p>
        <p><span className={styles.about__option}>Looking for a job</span>: <span
            className={styles.about__value}>{profile.lookingForAJob ? `YES` : 'NO'}</span></p>
        {profile.lookingForAJob &&
            <p><span className={styles.about__option}>My professional skills</span>: <span className={styles.about__value}>{profile.lookingForAJobDescription}</span>
            </p>}
        <p><span className={styles.about__option}>Contacts</span>: <ul>{Object.keys(profile.contacts).map(key =>
            <Contact key={key} title={key} site={key} value={profile.contacts[key]}/>)}</ul></p>
        {isOwner && <button onClick={goToEditMode} className={styles.about__edit}>Edit</button>}
    </div>
}

const Contact = ({title, value}) => {
    const socials = {
        "facebook":facebook,
        "website":website,
        "vk":vk,
        "twitter":twitter,
        "instagram":instagram,
        "youtube":youtube,
        "github":github,
        "mainLink":mainLink,
    }
    return <li><img className={styles.contactIcon} src={socials[title]} alt={title}/><span className={styles.about__option}>{title}:</span> <a href={value} className={styles.about__value}>{value}</a>
    </li>
}