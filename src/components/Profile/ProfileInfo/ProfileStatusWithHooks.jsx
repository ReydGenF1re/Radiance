import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    useEffect(() => {
        setStatus(props.status);
    },[props.status])
    return (
        <div className={styles.statusBlock}>
            {editMode ?
                <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} className={styles.status}
                       type="text" autoFocus={true}/> :
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>}
        </div>
    );

};

export default ProfileStatusWithHooks;