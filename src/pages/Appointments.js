import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
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
            <Card style={{ width: '100%', minHeight: '30vh' }}>
              <Card.Img variant='top' src={`${data.imageUrl}`} />
              <Card.Body>
                <Card.Title>{ data.name }</Card.Title>
                <Card.Text>
                  {
                    data.description
                  }
                </Card.Text>
                <Button variant='primary'>Cancel Appointment</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  )
}

export default Appointments
