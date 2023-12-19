import React from 'react';
import styles from './ProfileInfo.module.css';


class ProfileStatus extends React.Component{
    state = {
        editMode:false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode:true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status:e.target.value})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} className={styles.status} type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>}
            </div>
        );
    }
};

export default ProfileStatus;