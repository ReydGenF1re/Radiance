import React from "react";
import styles from './News.module.css';
const News = function({updateNewsBody,addNewsPost,updateNewsHighlight,updateNewsTitle,newsPage}) {
    const state = newsPage;
    let title = state.title;
    let highlight = state.highlight;
    let newsPostBody = state.newsPostBody;
    let newsBody, newsTitle, newsHighlight;

    const onTitleChange = (e) => {
        newsTitle = e.target.value;
        updateNewsTitle(newsTitle)
    }
    const onHighlightChange = (e) => {
        newsHighlight = e.target.value;
        updateNewsHighlight(newsHighlight)
    }

    const onNewsChange = (e) => {
        newsBody = e.target.value;
        updateNewsBody(newsBody)
    }
    const onAddPostClick = () => {
        addNewsPost();
    }
    return (
        <section>
            <form className={styles.post} onSubmit={e => e.preventDefault()} >
                <h3 className={styles.post__heading}>
                    Share your stories, everyone is so interested...
                </h3>
                <div className={styles.post__titleBlock}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <label htmlFor="highlight">Highlight</label>
                    </div>
                    <div className={styles.post__inputs}>
                    <input onChange={onTitleChange} value={title} type="text" placeholder="The main idea" id="title"/>
                    <input onChange={onHighlightChange} value={highlight} type="text" placeholder="What to highlight after the title" id="highlight"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="news">The news</label>
                    <textarea onChange={onNewsChange} value={newsPostBody} placeholder="So, what happened?" id="news" cols="30" rows="10"></textarea>
                </div>
                <button onClick={onAddPostClick} className={styles.post__button}>SEND</button>
            </form>
            {state.news.map(n => <NewsArticle title={n.title} news={n.news} highlight={n.highlight} />)}
        </section>
    )
}

function NewsArticle({title, highlight, news}) {
    return <article key={Date.now()} className={styles.news}>
        <h2 className={styles.news__title}>{title} <span> {highlight} </span></h2>
        <p className={styles.news__text}>{news}</p>
    </article>
}

export default News;