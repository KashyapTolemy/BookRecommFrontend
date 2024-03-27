import React from 'react'
import styles from './style.module.scss'

const Landing = () => {
    return (
        <div className={styles.container} id="home">
            <div className={styles.semi_heading}>
                <div className={styles.paraA}>
                    E
                    <br />
                    M
                    <br />
                    B
                    <br />
                    A
                    <br />
                    R
                    <br />
                    K
                    <br />

                    <br />
                    O
                    <br />
                    N
                    <span className={styles.spanA}></span>
                </div>
                <div className={styles.paraB}>
                    <span className={styles.spanB}></span>
                    A
                    <br />
                    <br />
                    J
                    <br />
                    O
                    <br />
                    U
                    <br />
                    R
                    <br />
                    N
                    <br />
                    E
                    <br />
                    Y
                    <br />
                    <br />
                    O
                    <br />
                    F
                </div>
            </div>
            <div className={styles.hero_img}></div>
            <div className={styles.heading}>
                KNOWLEDGE
                <br />
                KNOWLEDGE
                <br />
                KNOWLEDGE
                <br />
                {/* <span className={styles.spanC}>KNOWLEDGE</span> */}
                KNOWLEDGE
                <br />
                KNOWLEDGE
            </div>
            {/* <div className={styles.heading}>

            </div> */}
        </div>
    )
}

export default Landing
