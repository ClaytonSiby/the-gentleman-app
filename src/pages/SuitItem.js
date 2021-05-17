import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import styles from '../assets/scss/suitItem.module.scss';

const SuitItem = () => {
  const suitItemData = useSelector((state) => state.suitItem.suit);
  return (
    <Container className={`${styles.suitContainer}`}>
      <Row>
        <Col
          sm={12}
          md={6}
          className={`${styles.suitImage}`}
          style={{
            background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${suitItemData.imageUrl})`,
          }}
        />
        <Col sm={12} md={6} className={`${styles.suitDescription} p-3`}>
          <h4>
            {' '}
            {suitItemData.name}
            {' '}
          </h4>
          <div>
            <p>
              available color:
              { suitItemData.color }
            </p>
            <p>
              price: $
              { suitItemData.price }
            </p>
            <p>
              available size:
              { suitItemData.size }
            </p>
            <p>
              type:
              { suitItemData.suit_type }
            </p>
            <p>{ suitItemData.description }</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SuitItem;
