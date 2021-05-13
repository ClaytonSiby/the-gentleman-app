import React from 'react'
import styles from '../assets/scss/footer.module.scss'

const Footer = () => (
  <div className={`pt-4 text-center ${styles.footerContainer}`}>
    <p>Developed by Clayton Siby. &copy;copyright 2021. All rights reserved.</p>
    <p>
      <span className={`${styles.socialIcon}`}>
        <a href="">
          <i className='fab fa-github'></i>
        </a>
      </span>
      <span className={`${styles.socialIcon}`}>
        <a href="">
          <i className='fab fa-linkedin-in'></i>
        </a>
      </span>
      <span className={`${styles.socialIcon}`}>
        <a href="">
          <i className='fab fa-twitter'></i>
        </a>
      </span>
    </p>
  </div>
)

export default Footer
