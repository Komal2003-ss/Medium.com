import React from 'react';
import styles from './Trending.module.css';
import TrendingBox from '../TendingBox/TrendingBox.js';
const Trending = () => {
  return (
    <>
        <h2 className={styles.trending_top_head}>Trending on Medium</h2>
        <div className={styles.trending_section}>
      <TrendingBox number="01" trend_head="郭明錤 (Ming-Chi Kuo)" trend_para="Vision Pro首週末預購檢視：符合預期但隱憂浮現 / Vision Pro’s first-weekend pre-..." trend_date="Jan 22 . 2 min read"/>
      <TrendingBox number="02" trend_head="Adam Bly" trend_para="All the Institutions I Was Taught to Trust Are Crumbling All at Once" trend_date="Jan 22 . 2 min read"/>
      <TrendingBox number="03" trend_head="Thomas Smith in The Generator" trend_para="Midjourney 6 Means the End for a Big Chunk of the Photo Industry" trend_date="Jan 22 . 2 min read" />
    </div>
     <div className={styles.trending_section}>
     <TrendingBox number="04" trend_head="Barr Moses" trend_para="Top 10 Data & AI Trends for 2024" trend_date="Jan 22 . 2 min read"/>
     <TrendingBox number="05" trend_head="Tom Colvin in ProAndroidDev" trend_para="Coroutine patterns in Android, and why they work" trend_date="Jan 23 . 2 min read"/>
     <TrendingBox number="06" trend_head="Mike Clayton in Towards Data Science" trend_para="Is Matplotlib Still the Best Python Library for Static Plots?" trend_date="Jan 20·18 min read" />
   </div>
    </>

  )
}

export default Trending
