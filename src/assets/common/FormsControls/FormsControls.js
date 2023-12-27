import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";

export const Input = ({input,meta:{touched,error}, ...props}) => {
    const hasError = error && touched
    return <>
        <input {...props} {...input}/>
        {hasError && <div className={styles.errorText}>{error}</div>}
    </>

}
export const CreateField = ({children, id, name, type, validators=[],classForLabel=null}) => {
    return <>
        <Field type={type} id={id} validate={validators} component={Input} name={name}/>
        <label className={classForLabel} htmlFor={id}>
            {children}
        </label></>
}