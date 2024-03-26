import React, { useState } from 'react'
import styles from './style.module.scss'
import axios from 'axios';

const Recommend = () => {
  const [bookName, setBookName] = useState('');
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/recommend', { bookName });
      setRecommendedBooks(response.data.recommendedBooks);
      console.log(response.data.recommendedBooks
      )
    } catch (error) {
      console.error('Error fetching recommended books:', error);
    }
  };


  return (
    <div className={styles.container} id="recommendation">
      <div className={styles.heading}>Need Recommendation for a book?</div>
      <div className={styles.subcontainer}>
        <div className={styles.subheading}>Enter the name of a book you like</div>
        <form className={styles.inputform} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder=""
            value={bookName}
            name="bookname"
            onChange={(e) => setBookName(e.target.value)}
            className={styles.book_input}
          />
          <button type="submit" className={styles.btn}>
            SUBMIT
          </button>
        </form>
      </div>
      <div className={styles.recommended_collection}>
        {recommendedBooks.map((book, index) => (
          <div className={styles.book_container} key={index}>
            <img src={book[2]} alt={book.book_name} className={styles.book_cover} />
            <div className={styles.book_title}>{book[0]}</div>
            <div className={styles.book_author}>by {book[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommend
