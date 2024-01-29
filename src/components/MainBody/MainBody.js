import React from 'react'
import styles from './MainBody.module.css';
import MainBtn from '../MainBtn/MainBtn';
const MainBody = () => {
  return (
    <div className={styles.main_body}>
      <div className={styles.main_body_left}>

      </div>
      <div className={styles.main_body_right}>
        <h2>Discover more of what matters to you</h2>
        <div className={styles.MainBtnAll}>
            <MainBtn text="Programming" />
            <MainBtn text="Data Science" />
            <MainBtn text="Technology" />
            <MainBtn text="Self Improvement" />
            <MainBtn text="Writing" />
            <MainBtn text="Relationships" />
            <MainBtn text="Machine Learning" />
            <MainBtn text="Productivity" />
            <MainBtn text="Politics" />

        </div>
      </div>
    </div>
  )
}

export default MainBody
