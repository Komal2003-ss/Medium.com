import React from 'react';
import styles from './MainBtn.module.css';
const MainBtn = (props) => {
  return (
    <div>
      <button className={styles.main_btn}>{props.text}</button>
    </div>
  )
}

export default MainBtn
