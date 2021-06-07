import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, Card, Button, Container, Alert,
} from 'react-bootstrap';
import ReactLoading from 'react-loading';
// import { Link } from 'react-router-dom';
import fetchAppointments from '../redux/appointments/get/appointmentActions';
import removeAppointment from '../redux/appointments/post/remove/removeAppActions';
import styles from '../assets/scss/appointments.module.scss';

const Appointments = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.signup.user.auth_token);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    (async () => {
      await dispatch(fetchAppointments(authToken));
    })();
    setLoadingComplete(true);
  }, [reload]);

  const handleAppointmentDelete = (id, token) => {
    dispatch(removeAppointment(id, token));
    setReload(true);
  };

  const appointments = useSelector((state) => state.appointments);
  const appointmenMessage = useSelector(({ addAppointment }) => addAppointment.message);
  const errorMessage = useSelector(({ addAppointment }) => addAppointment.error);
  const [show, setShow] = useState(true);
  const handleDismiss = () => setShow(false);

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
      {errorMessage ? show && (
        <Alert variant="danger" className="pl-1 py-0 pr-0 d-flex justify-content-between">
          <span>{errorMessage}</span>
        &nbsp;&nbsp;
          <Button onClick={handleDismiss}>X</Button>
        </Alert>
      ) : show && (
      <Alert variant="success" className="pl-1 py-0 pr-0 d-flex justify-content-between">
        <span>{appointmenMessage.message}</span>
        &nbsp;&nbsp;
        <Button onClick={handleDismiss}>x</Button>
      </Alert>
      )}

      <Row>
        {appointments
          && appointments.data.map((data) => (
            <Col sm={12} md={3} key={data.id}>
              <Card style={{ width: '100%', minHeight: '30vh' }} className="my-2">
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
                    className={`border ${styles.detailsBtn}`}
                    onClick={async () => {
                      await handleAppointmentDelete(data.id, authToken);
                      setTimeout(() => window.location.reload(), 1500);
                    }}
                  >
                    Cancel Appointment
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
