import React from 'react';
import styles from './Slider.module.css';
import Button from '../Button/Button.js';
const Slider = () => {
  return (
    <div className={styles.slider_section}>
      <div className={styles.slider_right}>
        <h1>Stay curious.</h1>
        <p>Discover stories, thinking, and expertise from writers on any topic.</p>
        <Button text="Start reading" />
      </div>
      <div>
   
      </div>
    </div>
  )
}

export default Slider
