const SEND_MESSAGE = "radiance-network/messages/SEND-MESSAGE";

const initialState = {
    messages: [
        {id: 1, name: "Тимоха", data: "Today,18:20", message: "Здорова, чушпаны"},
    ],
    dialogs: [
        {id: 0, name: "Тимоха"},
        {id: 1, name: "Дружок"},
    ],
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            const body = action.newMessageBody;
            return{
                ...state,
                messages: [...state.messages, {
                    id: 6,
                    name: action.name,
                    data: new Date().toLocaleString(),
                    message: body
                },],
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (name, newMessageBody) => ({type: SEND_MESSAGE, name, newMessageBody});
export default profileReducer;