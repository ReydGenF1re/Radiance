import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "radiance-network/app/INITIALIZED-SUCCESS"

const initialState = {
    initialized:false,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}
export default appReducer;
export const initializedSuccess = () => ({type:INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
    const result = dispatch(getAuthUserData());
    Promise.all([result]).then(() =>  dispatch(initializedSuccess()))
}