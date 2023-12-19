import React from "react";
import styles from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../assets/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilities/validators/validators";
const maxLength = maxLengthCreator(400)

export default function Messages({messagesPage,sendMessage,username,isAuth}) {
    const state = messagesPage;
    const dialogsData = state.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>);
    const messagesData = state.messages.map(m => <Message name={m.name} id={m.id} data={m.data} message={m.message} key={m.id}/>);
    const addNewMessage = ({newMessageBody}) => {
        sendMessage(username, newMessageBody)
    }
    if(!isAuth) return <Navigate to={'/login'} />

    return (
        <section>
            <div className={styles.dialogs__inner}>
                <ul className={styles.dialogs__lists}>
                    {dialogsData}
                </ul>
                <div>
                    <div className={styles.messages}>
                        {messagesData}
                    </div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </section>
    )
}
const MessageForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit} className={styles.newMessage}>
        <img className={styles.message__ava} src='https://i.ytimg.com/vi/vy6ND7afqLo/hqdefault.jpg' alt="Avatar"/>
        <Field validate={[required,maxLength]} name={'newMessageBody'} placeholder="Type a message..." className={styles.message__input} type="text" component={Input}/>
        <button className={styles.message__btn} type="submit"></button>
    </form>
}
const AddMessageFormRedux = reduxForm({form:"addMessageForm"})(MessageForm)