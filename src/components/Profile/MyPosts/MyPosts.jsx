import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import userPhoto from "../../../assets/images/user.jpg"
import {Field, reduxForm} from "redux-form";
import {required,maxLengthCreator} from "../../../utilities/validators/validators";
import {Input} from "../../../assets/common/FormsControls/FormsControls";
const maxLength = maxLengthCreator(400)
export default React.memo(({addPost, posts,profile}) => {


    const postsData = posts.map(p => <Post name={p.name} profile={profile} likes={p.likes} shares={p.shares} comments={p.comments}
                                           date={p.date} message={p.message}/>);
    const onAddPost = ({newPostText}) => {
        addPost(newPostText)
    }

    return (
        <section className={styles.posts}>
            <AddPostFormRedux onSubmit={onAddPost} profile={profile}/>
            {postsData}
        </section>
    )
})
const AddPostForm = ({handleSubmit,profile}) => {
    console.log()
    return <form onSubmit={handleSubmit} className={styles.newPost}>
        <img className={styles.post__ava} src={profile?.photos.large || userPhoto} alt="Avatar"/>
        <Field component={Input} name="newPostText" className={styles.post__input} validate={[required,maxLength]}
               placeholder="What’s on your mind?" type="text"/>
        <button className={styles.post__btn}></button>
    </form>
}
const AddPostFormRedux = reduxForm({form:"addPostForm"})(AddPostForm)