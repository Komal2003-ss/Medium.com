import React from 'react';
import styles from './TrendingBox.module.css';
const TrendingBox = (props) => {
  return (
    <div className={styles.trending_box}>
        <div className={styles.trending_number}>
            {props.number}
        </div>
        <div className={styles.trending_content}>
            <h3>{props.trend_head}</h3>
            <p>{props.trend_para}</p>
            <span>{props.trend_date}</span>
        </div>
      
    </div>
  )
}

export default TrendingBox;
