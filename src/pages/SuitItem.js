import React from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-bootstrap';
import postAppointment from '../redux/appointments/post/add/addAppActions';
import styles from '../assets/scss/suitItem.module.scss';

const SuitItem = ({ createAppointment }) => {
  const suitItemData = useSelector((state) => state.suitItem.suit);
  const authToken = localStorage.getItem('userToken');

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
              available color:&nbsp;
              <span className={`${styles.item}`}>{suitItemData.color}</span>
            </p>
            <p>
              price:&nbsp;$
              <span className={`${styles.item}`}>{suitItemData.price}</span>
            </p>
            <p>
              available size:&nbsp;
              <span className={`${styles.item}`}>{suitItemData.size}</span>
            </p>
            <p>
              type:&nbsp;
              <span className={`${styles.item}`}>{suitItemData.suit_type}</span>
            </p>
            <p>
              <span className={`${styles.item}`}>
                {suitItemData.description}
              </span>
            </p>
            <button
              type="button"
              onClick={() => createAppointment(suitItemData.id, authToken)}
              className="btn btn-md btn-default border"
            >
              Try it Out
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

SuitItem.propTypes = {
  createAppointment: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createAppointment: (suitId, authToken) => {
    dispatch(postAppointment(suitId, authToken));
  },
});

export default connect(null, mapDispatchToProps)(SuitItem);
