import React from 'react';
import styles from '../assets/scss/footer.module.scss';

const Footer = () => (
  <div className={`mt-2 pt-4 text-center ${styles.footerContainer}`}>
    <p>Developed by Clayton Siby. &copy;copyright 2021. All rights reserved.</p>
    <p>
      <span className={`${styles.socialIcon}`}>
        <a href="https://github.com/ClaytonSiby" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
      </span>
      <span className={`${styles.socialIcon}`}>
        <a href="https://www.linkedin/in/clayton-siby" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in" />
        </a>
      </span>
      <span className={`${styles.socialIcon}`}>
        <a href="https://twitter.com/ClaytonSiby" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" />
        </a>
      </span>
    </p>
  </div>
);

export default Footer;
