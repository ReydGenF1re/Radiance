import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {

                    name: "Richard",
                    message: "Тимоха, ты вообще охуел!",
                    date: new Date().toLocaleString(),
                    comments: 2,
                    likes: 50,
                    shares: 39
                },
                {
                    name: "Richard",
                    message: "Тимоха, ты вообще охуел! Как так можно нахуй, ну ты вообще пиздец дизлайк отписка колокольчик бубенцы пососи",
                    date: new Date().toLocaleString(),
                    comments: 2,
                    likes: 50,
                    shares: 39
                },
                {
                    name: "Richard",
                    message: "Тимоха, ты вообще охуел!",
                    date: new Date().toLocaleString(),
                    comments: 2,
                    likes: 50,
                    shares: 39
                },
                {
                    name: "Richard",
                    message: "Тимоха, ты вообще охуел!",
                    date: new Date().toLocaleString(),
                    comments: 2,
                    likes: 50,
                    shares: 39
                },
                {
                    name: "Richard",
                    message: "Тимоха, ты вообще охуел!",
                    date: new Date().toLocaleString(),
                    comments: 2,
                    likes: 50,
                    shares: 39
                },
            ],
            newPostText: "",
        },
        messagesPage: {
            messages: [
                {id: 1, name: "Тимоха", data: "Today,18:20", message: "Че ты творишь нахуй?"},
                {id: 2, name: "Тимоха", data: "Today,18:20", message: "Че ты творишь нахуй?"},
                {id: 3, name: "Тимоха", data: "Today,18:20", message: "Че ты творишь нахуй?"},
                {id: 4, name: "Тимоха", data: "Today,18:20", message: "Че ты творишь нахуй?"},
                {id: 5, name: "Тимоха", data: "Today,18:20", message: "Че ты творишь нахуй?"},

            ],
            dialogs: [
                {id: 0, name: "Тимоха"},
                {id: 1, name: "Хуила"},
                {id: 2, name: "Дружок"},
                {id: 3, name: "Чмоня"},

            ],
            newMessageBody:"",
        },
        newsPage: {
            news: [
                {
                    name: "Erlich Bachman",
                    hightlight: "burned his palapa",
                    news: "Yesterday CEO of Aviato just burned his palapa."
                },
                {
                    name: "Erlich Bachman",
                    hightlight: "burned his palapa",
                    news: "Yesterday CEO of Aviato just burned his palapa."
                },
                {
                    name: "Erlich Bachman",
                    hightlight: "burned his palapa",
                    news: "Yesterday CEO of Aviato just burned his palapa."
                },
                {
                    name: "Erlich Bachman",
                    hightlight: "burned his palapa",
                    news: "Yesterday CEO of Aviato just burned his palapa."
                },
                {
                    name: "Erlich Bachman",
                    hightlight: "burned his palapa",
                    news: "Yesterday CEO of Aviato just burned his palapa."
                },

            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber: () => {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._callSubscriber(this._state)

    }
};



export default store;
window.store = store;