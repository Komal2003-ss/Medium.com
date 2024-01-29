import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
    // const {text} = props;
  return (
    <div>
      <button className={styles.my_btn}>{props.text}</button>
    </div>
  )
}

export default Button
