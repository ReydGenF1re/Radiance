import React, {Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./assets/common/Preloader/Preloader";
import store from "./redux/redux-store";

const LoginPage = React.lazy(() => import("./components/Login/Login"));
const NewsContainer = React.lazy(() => import("./components/News/NewsContainer"))
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"));
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
    catchAllUnhandledError = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledError);
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="appWrapper container">
                <HeaderContainer/>
                <main className="main">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile" />} />
                            <Route path="/profile/:userID?" element={<ProfileContainer/>}/>
                            <Route path="/messages/*" element={<MessagesContainer/>}/>
                            <Route path="/news" element={<NewsContainer/>}/>
                            <Route path="/friends" element={<FriendsContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="*" element={<div className="notFound">404: NOT FOUND</div>}/>
                        </Routes>
                    </Suspense>

                </main>
                <Navbar/>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})
const AppContainer = connect(mapStateToProps, {initializeApp})(App);
const MainApp = () => <HashRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</HashRouter>
export default MainApp