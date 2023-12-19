import React from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../../assets/common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
export default function ProfileInfo({profile,status,updateStatus}) {
    if(!profile){
        return <Preloader />
    }
    // const userAva = "https://media0.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif?cid=6c09b952zesvehmtfqf8vvlmz4177kfnmr9hg0jhwml1ob2t&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    return <>
        <section className={styles.user}>
            <img className={styles.user__background} src='https://img.freepik.com/premium-photo/palms-exotic-pattern-palm-trees-on-blue-sky-palm-at-tropical-coast-coconut-tree-tropical-backdrop-on-sun-light-sky_265223-30591.jpg' alt="Background: palms"/>

                <figure className={styles.user__profile}>
                    <img
                        src={profile.photos.large ?? userPhoto}
                        alt="Avatar"/>
                </figure>
                <div className={styles.user__about}>
                    {/*<img className={styles.user__img} src="bg.jpg" alt=""/>*/}
                    <h2 className={styles.user__name}>{profile.fullName}</h2>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>

        </section>
        {profile.aboutMe && <section className={styles.about}>
            <h2 className={styles.section__title}>About</h2>
            <p>{profile.aboutMe}</p>
        </section>}

    </>
}
