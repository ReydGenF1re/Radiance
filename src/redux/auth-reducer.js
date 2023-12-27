import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "radiance-network/auth/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "radiance-network/auth/GET-CAPTCHA-URL-SUCCESS";


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaURL: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }

}
export default authReducer;
export const setAuthUserData = (userID, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userID, email, login, isAuth}
});
export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else{
        if(data.resultCode === 10){
            dispatch(getCaptchaURL())
        }
        const message = data.messages.length > 0 ? data.messages[0] : "Something is wrong 💥💥💥"
        const action = stopSubmit('login', {_error: message});
        dispatch(action)
    }

}
export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaURLSuccess = (captchaURL) => ({
    type:GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}
})
export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL()
    const captchaURL = response.url;
    dispatch(getCaptchaURLSuccess(captchaURL))
}
