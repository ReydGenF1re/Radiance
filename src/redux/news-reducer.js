const UPDATE_NEWS_BODY = 'radiance-network/news/UPDATE-NEWS-BODY';
const UPDATE_NEWS_TITLE = 'radiance-network/news/UPDATE-NEWS-TITLE'
const UPDATE_NEWS_HIGHLIGHT = 'radiance-network/news/UPDATE-NEWS-HIGHLIGHT'
const ADD_NEWS_POST = 'radiance-network/news/ADD-NEWS-POST';

const initialState = {
    news: [
        {
            title: "Erlich Bachman",
            highlight: "burned his palapa",
            news: "Yesterday CEO of Aviato just burned his palapa."
        },
    ],
    title: '',
    highlight: '',
    newsPostBody: '',
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEWS_BODY:
            return {...state, newsPostBody: action.body}
        case UPDATE_NEWS_TITLE:
            return {...state, title: action.title}
        case UPDATE_NEWS_HIGHLIGHT:
            return {...state, highlight: action.highlight}
        case ADD_NEWS_POST:
            if (!state.title) return state; //TO DO
            return {
                ...state,
                news: [{
                    title: state.title,
                    highlight: state.highlight,
                    news: state.newsPostBody,
                }, ...state.news],
                newsPostBody: '',
                title: '',
                highlight: '',
            }
        default:
            return state;
    }

}

export const addNewsPostCreator = () => ({type: ADD_NEWS_POST});
export const updateNewsBodyCreator = (body) => ({type: UPDATE_NEWS_BODY, body: body});
export const updateNewsTitleCreator = (title) => ({type: UPDATE_NEWS_TITLE, title: title});
export const updateNewsHighlightCreator = (highlight) => ({type: UPDATE_NEWS_HIGHLIGHT, highlight: highlight});

export default newsReducer;