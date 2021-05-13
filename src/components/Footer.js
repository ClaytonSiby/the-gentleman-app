import React from 'react';
import styles from '../assets/scss/footer.module.scss';

const Footer = () => (
  <div className={`p-2 mt-4 text-center ${styles.footerContainer}`}>
    <p>Developed by Clayton Siby. &copy; 2021. All rights reserved.</p>
  </div>
);

export default Footer;
