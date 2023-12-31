import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST = "radiance-network/profile/ADD-POST";
const SET_USER_PROFILE = "radiance-network/profile/SET-USER-PROFILE"
const TOGGLE_FETCHING = "radiance-network/profile/TOGGLE-FETCHING"
const SET_STATUS = "radiance-network/profile/SET-STATUS";
const DELETE_POST = "radiance-network/profile/DELETE-POST";
const SAVE_PHOTO_SUCCESS = "radiance-network/profile/SAVE-PHOTO-SUCCESS";


const initialState = {
    posts: [
        {
            id: 0,
            name: "Richard",
            message: "Лайк, респект и уважение таким",
            date: new Date().toLocaleString(),
            comments: 2,
            likes: 50,
            shares: 39
        },
    ],
    profile: null,
    isFetching: false,
    status: '',

};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: new Date().getMilliseconds(),
                name: action.name,
                message: action.newPostText,
                date: new Date().toLocaleString(),
                comments: 0,
                likes: 0,
                shares: 0,
            };
            return {...state, posts: [newPost, ...state.posts], newPostText: ''};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(id => id !== action.postID)}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }


        default:
            return state;
    }

}
export const addPostCreator = (name, newPostText) => ({type: ADD_POST, name, newPostText});
export const deletePost = (postID) => ({type: DELETE_POST, postID})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userID) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(data));
    dispatch(toggleFetching(false));
}
export const getStatus = (userID) => async (dispatch) => {
    const data = await profileAPI.getStatus(userID)
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = file => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = profile => async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userID))
    } else {
        dispatch(stopSubmit('EditProfile', {_error: data.messages[0]}))
    }
}

export default profileReducer;