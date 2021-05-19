import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, Card, Button, Container,
} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import fetchAppointments from '../redux/appointments/get/appointmentActions';
import removeAppointment from '../redux/appointments/post/remove/removeAppActions';
import styles from '../assets/scss/appointments.module.scss';

const Appointments = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.signup.user.auth_token);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        await dispatch(fetchAppointments(authToken));
      })();
      setLoadingComplete(true);
    }, 3000);
  }, [reload]);

  const handleAppointmentDelete = (id, token) => {
    dispatch(removeAppointment(id, token));
    setTimeout(() => {
      setReload(true);
    }, 200);
  };

  const appointments = useSelector((state) => state.appointments);
  if (!loadingComplete) {
    return (
      <Container>
        <Row>
          <div className={`${styles.loading}`}>
            <ReactLoading type="bars" color="grey" height={70} width={80} />
          </div>
        </Row>
      </Container>
    );
  }
  if (appointments.data.length < 1) {
    return (
      <Container>
        <div className="text-center bg-warning">
          <p>You do not have any appointments.</p>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        {appointments
          && appointments.data.map((data) => (
            <Col sm={12} md={3} key={data.id}>
              <Card
                style={{ width: '100%', minHeight: '30vh' }}
                className="my-2"
              >
                <Card.Img
                  variant="top"
                  style={{ height: '10rem', objectFit: 'cover' }}
                  src={`${data.imageUrl}`}
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <p>
                    <span>
                      $
                      {data.price}
                    </span>
                    &nbsp;
                    <span>
                      {data.size}
                      {' '}
                    </span>
                  </p>
                  <Button
                    variant="default"
                    className="mx-1 border"
                    onClick={() => handleAppointmentDelete(data.id, authToken)}
                  >
                    Cancel Session
                  </Button>
                  <Button className={`mx-1 border ${styles.detailsBtn}`}>
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Appointments;
