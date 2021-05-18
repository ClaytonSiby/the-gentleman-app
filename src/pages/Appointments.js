import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import ReactLoading from 'react-loading'
import fetchAppointments from '../redux/appointments/get/appointmentActions'
import styles from '../assets/scss/appointments.module.scss'

const Appointments = () => {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const dispatch = useDispatch()
  const authToken = useSelector(state => state.signup.user.auth_token)
  useEffect(() => {
    setTimeout(() => {
      ;(async () => {
        await dispatch(fetchAppointments(authToken))
      })()
      setLoadingComplete(true)
    }, 3000)
  }, [])

  const appointments = useSelector(state => state.appointments)
  return (
    <Container>
      <Row>
        {!loadingComplete ? (
          <div className={`${styles.loading}`}>
            <ReactLoading type='bars' color='grey' height={70} width={80} />
          </div>
        ) : appointments.data.length < 1 ? (
          <div className='text-center bg-warning'>
            <p>You do not have any appointments.</p>
          </div>
        ) : (
          appointments.data &&
          appointments.data.map(data => (
            <Col xs={12} md={3}>
              <Card style={{ width: '100%', minHeight: '30vh' }} className="my-2">
                <Card.Img
                  variant='top'
                  style={{ height: '10rem', objectFit: 'cover' }}
                  src={`${data.imageUrl}`}
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <p>
                    <span>${data.price}</span>&nbsp;
                    <span>{data.size} </span>
                  </p>
                  <Button variant='default' className="mx-1 border">Cancel Appointment</Button>
                  <Button className={`mx-1 border ${styles.detailsBtn}`}>Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  )
}

export default Appointments
