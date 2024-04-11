import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

const Featured = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      await fetchData();
    })()
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const booksData = data.author.map((author, index) => ({
        author,
        book_name: data.book_name[index],
        image: data.image[index],
        rating: parseFloat(data.rating[index]).toFixed(2), // Format rating to 2 decimal places
        votes: data.votes[index]
      }));
      setBooks(booksData);
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
    }
  };

  return (
    <div className={styles.container} id="toprated">
      <div className={styles.heading}>TOP 10 BEST RATED BOOKS FOR YOU</div>
      <div className={styles.collection}>
        {books.slice(0, 10).map((book, index) => (
          <div className={styles.book_container} key={index}>
            <img src={book.image} alt={book.book_name} className={styles.book_cover} />
            <div className={styles.book_title}>{book.book_name}</div>
            <div className={styles.book_author}>by {book.author}</div>
            <div className={styles.rv_container}>
              <div className={styles.book_rating}>Rating: {book.rating}</div>
              <div className={styles.book_votes}>Votes: {book.votes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
