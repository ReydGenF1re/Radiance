import React from "react";
import styles from "./Paginator.module.css";
export default function Paginator({   currentPage: curPage,
                                    onPageChanged,
                                    pageSize,
                                    totalFriendsCount,
                                }) {
    const pagesCount = Math.ceil(totalFriendsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let slicedPages;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }
    return <ul className={styles.pagination}>
        {slicedPages.map(page => <li onClick={() => onPageChanged(page)}
                                     className={curPage === page && styles.selectedPage}>{page}</li>)}
    </ul>
}