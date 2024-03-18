import React, { useState } from 'react'
import styles from './style.module.scss'

const Recommend = () => {
  const [bookName, setBookName] = useState();
  return (
    <div className={styles.container} id="recommendation">
      <div className={styles.heading}>Need Recommendation for a book?</div>
      <div className={styles.subcontainer}>
        <div className={styles.subheading}>Enter the name of a book you like</div>
        <form className={styles.inputform}>
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
    </div>
  )
}

export default Recommend
