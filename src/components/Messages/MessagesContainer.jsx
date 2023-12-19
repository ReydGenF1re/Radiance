import React from "react";
import {sendMessageCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage:state.messagesPage,
        username:"Erlich",
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage(name,newMessageBody){dispatch(sendMessageCreator(name,newMessageBody))},
    }
}

export default compose( connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Messages);