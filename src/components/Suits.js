import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import fetchSuits from '../redux/suits/get/suitActions';
import getsuitItem from '../redux/suitItem/suitItemActions';
import styles from '../assets/scss/suits.module.scss';

const Suits = ({ suitsData, suitsRequest, suitItemRequest }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const authToken = useSelector((state) => state.signup.user.auth_token);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        await suitsRequest(authToken);
      })();
      setLoadingComplete(true);
    }, 2000);
  }, []);

  return (
    <div className="text-light">
      {!loadingComplete ? (
        <div>
          <ReactLoading type="bars" color="green" height={70} width={80} />
        </div>
      ) : (
        <Row>
          <Col sm={12} className={`${styles.header}`} />
          <Col sm={12}>
            <div className={`${styles.suitsContainer} p-0`}>
              {suitsData
                && suitsData.suits
                && suitsData.suits.map((data) => (
                  <div
                    className={`${styles.suitThumbnail} my-1 p-2`}
                    key={data.id}
                  >
                    <img src={`${data.imageUrl}`} alt={`${data.name}`} />
                    <div className={`${styles.hide} p-3`}>
                      <div>
                        <p>
                          <span className={`${styles.title}`}>{data.name}</span>
                          <a
                            href="/"
                            className={`${styles.appointmentIcon} m-5`}
                          >
                            <i className="text-warning far fa-heart" />
                          </a>
                        </p>
                      </div>
                      <br />
                      <div>
                        <Link to={`/suits/${data.id}`} onClick={() => suitItemRequest(data.id, authToken)}>Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

Suits.propTypes = {
  suitsData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    suits: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  suitsRequest: PropTypes.func.isRequired,
  suitItemRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  suitsData: state.suits,
});

const mapDispatchToProps = (dispatch) => ({
  suitsRequest: (data) => dispatch(fetchSuits(data)),
  suitItemRequest: (id, token) => dispatch(getsuitItem(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Suits);
