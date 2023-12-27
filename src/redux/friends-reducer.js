import {friendsAPI} from "../api/api";
import {updateObjectInArray} from "../utilities/helpers/object-helpers";

const FOLLOW = "radiance-network/friends/FOLLOW";
const UNFOLLOW = "radiance-network/friends/UNFOLLOW";
const SET_FRIENDS = "radiance-network/friends/SET-FRIENDS";
const SET_CURRENT_PAGE = "radiance-network/friends/SET-CURRENT-PAGE";
const SET_TOTAL_FRIENDS_COUNT = "radiance-network/friends/SET-TOTAL-FRIENDS-COUNT";
const TOGGLE_FETCHING = "radiance-network/friends/TOGGLE-FETCHING"
const TOGGLE_FOLLOWING = "radiance-network/friends/TOGGLE-FOLLOWING"
const initialState = {
    friends: [],
    pageSize: 6,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

};
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, friends: updateObjectInArray(state.friends, action.userID, 'id', {followed:true})

            }

        case UNFOLLOW:
            return {
                ...state, friends: updateObjectInArray(state.friends, action.userID, 'id', {followed:false})
            }
        case SET_FRIENDS:
            return {...state, friends: action.friends}

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_FRIENDS_COUNT: {
            return {...state, totalFriendsCount: action.count}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userID] :
                    [...state.followingInProgress.filter(id => id !== action.userID)]
            }
        }
        default:
            return state;
    }
}
export default friendsReducer;


export const followSuccess = (userID) => ({type: FOLLOW, userID: userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalFriendsCount = (count) => ({type: SET_TOTAL_FRIENDS_COUNT, count})

export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowing = (isFetching, userID) => ({type: TOGGLE_FOLLOWING, isFetching, userID});


export const requestFriends = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true));
    const data = await friendsAPI.getFriends(currentPage, pageSize)
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount(data.totalCount));
    dispatch(toggleFetching(false));
}
const toggleFollowUnfollow = async (dispatch,action, friend, actionCreator) => {
    dispatch(toggleFollowing(true, friend.id))
    const data = await friendsAPI.handleButton(action, friend)
    if (data.resultCode === 0) {
        dispatch(actionCreator(friend.id))
    }
    dispatch(toggleFollowing(false, friend.id))

}
export const follow = (f) => async (dispatch) => {
    await toggleFollowUnfollow(dispatch,'FOLLOW',f,followSuccess)
}
export const unfollow = (f) => async (dispatch) => {
    await toggleFollowUnfollow(dispatch,'UNFOLLOW',f, unfollowSuccess)

}