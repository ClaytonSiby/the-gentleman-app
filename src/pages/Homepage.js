import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../assets/scss/homepage.module.scss';

const Homepage = () => (
  <Row className={`${styles.homepage} p-0 m-0`}>
    <Col xs={12} className={`${styles.banner}`}>
      <div className="text-center">
        <h1 className="my-3">The Gentleman</h1>
        <p>Character. Intelligence. Strength. Style</p>
        <p>That makes a gentleman.</p>
      </div>
    </Col>
    <Col className={`${styles.welcomeText}`}>
      <button className="my-2 btn btn-md btn-default border" type="button">Explore More</button>
      <p className="m-2">
        Explore the style, the elegant look for your special occassion. We offer
        high quility products. The gentleman is here to give you a sophisticated
        appearance and lighten up the mood of your day. Enjoy!
      </p>
    </Col>
  </Row>
);

export default Homepage;
