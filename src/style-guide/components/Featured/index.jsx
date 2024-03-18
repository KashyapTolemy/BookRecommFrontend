import React from 'react'
import styles from './style.module.scss'
import TopRated from '../../../../TopRated.json'

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>TOP 10 BEST RATED BOOKS FOR YOU</div>
      <div className={styles.collection}>
        {TopRated.slice(0, 10).map((book) => {
          return (
            <div className={styles.book_container} key={book["ISBN"]}>
              <img src={book["Image-URL-M"]} alt={book["Book-Title"]} className={styles.book_cover} />
              <div className={styles.book_title}>{book["Book-Title"]}</div>
              <div className={styles.book_author} >by {book["Book-Author"]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured
