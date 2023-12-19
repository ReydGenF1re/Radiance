import React from "react";
import {
    addNewsPostCreator,
    updateNewsHighlightCreator,
    updateNewsBodyCreator,
    updateNewsTitleCreator
} from "../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewsBody:(newsBody) => {
            dispatch(updateNewsBodyCreator(newsBody));
        },
        updateNewsHighlight:(newsHighlight) => {
            dispatch(updateNewsHighlightCreator(newsHighlight));
        },
        updateNewsTitle:(newsTitle) => {
            dispatch(updateNewsTitleCreator(newsTitle))
        },
        addNewsPost:() => {
            dispatch(addNewsPostCreator());
        },
    }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;