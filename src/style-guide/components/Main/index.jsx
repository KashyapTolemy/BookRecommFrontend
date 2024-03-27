import React from 'react'
import Landing from '@/style-guide/components/Landing'
import Featured from '@/style-guide/components/Featured'
import Recommend from '@/style-guide/components/Recommend'
import Contact from '../Contact'
import styles from './style.module.scss'

const Main = () => {
    return (
        <div className={styles.container}>
            
            <Landing />
            <Featured />
            <Recommend />
            <Contact />
        </div>
    )
}

export default Main
