import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";
const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage:messagesReducer,
    newsPage: newsReducer,
    friendsPage: friendsReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;