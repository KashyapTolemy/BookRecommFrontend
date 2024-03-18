import React from 'react'
import styles from './style.module.scss'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>MENU</div>
            <div className={styles.items}>
                <a href="#home" className={styles.item}>Home</a>
                <a href="#toprated" className={styles.item}>TopRated</a>
                <a href="#recommendation" className={styles.item}>Recommendation</a>
                <a href="#contact" className={styles.item}>Contact</a>
            </div>
        </div>

    )
}

export default Navbar
