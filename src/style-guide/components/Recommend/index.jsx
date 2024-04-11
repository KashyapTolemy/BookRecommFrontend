import React, { useState } from 'react'
import styles from './style.module.scss'
import axios from 'axios';

const Recommend = () => {
  const [bookName, setBookName] = useState('');
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSearched(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/api/recommend`, { bookName });
      setRecommendedBooks(response.data.recommendedBooks);
      console.log(response.data.recommendedBooks)
    } catch (error) {
      console.error('Error fetching recommended books:', error);
      setRecommendedBooks([]);
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
      </div>{
        searched ? ((recommendedBooks.length > 0 ? (
          <div className={styles.recommended_collection}>
            {recommendedBooks.map((book, index) => (
              <div className={styles.book_container} key={index}>
                <img src={book[2]} alt={book.book_name} className={styles.book_cover} />
                <div className={styles.book_title}>{book[0]}</div>
                <div className={styles.book_author}>by {book[1]}</div>
              </div>
            ))}
          </div>) : (
          <div className={styles.empty_collection}>
            <div className={styles.empty_message}>
              ☹️We couldn't find similar books at the moment. Please try again later or explore other recommendations.
            </div>
          </div>
        ))) : (<></>)
      }
    </div>
  )
}

export default Recommend
