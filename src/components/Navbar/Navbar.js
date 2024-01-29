import React from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div  className={`${styles.navigation}`}>
      <div>
        <img src='./images/logo.png' alt="loading logo" />
      </div>
      <div className={styles.nav_link}> 
      <ul>
        <li>Our Story</li>
        <li>Membership</li>
        <li>Write</li>
        <li>Sign In</li>
        
      </ul>
      <Button text="Get Started"/>
      </div>
      
      </div>
      
    </nav>
  )
}

export default Navbar
