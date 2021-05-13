import React, { useEffect, useState } from 'react'
import fetchSuits from '../redux/suits/get/suitActions'
import { connect, useSelector } from 'react-redux'
import ReactLoading from 'react-loading'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../assets/scss/suits.module.scss'

const Suits = ({ suitsData, suitsRequest }) => {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const auth_token = useSelector(state => state.signup.userToken)

  useEffect(() => {
    ;(async () => {
      await suitsRequest(auth_token)
    })()
    setLoadingComplete(true)
  }, [])

  return (
    <Container className="text-light">
      {!loadingComplete ? (
        <div>
          <ReactLoading type='bars' color='green' height={70} width={80} />
        </div>
      ) : (
        <Row>
          <Col sm={12} className={`${styles.header}`}></Col>
          <Col sm={12}>
          <div className={`${styles.suitsContainer} p-0`}>
          {suitsData &&
            suitsData.suits &&
            suitsData.suits.map(data => (
              <div
                className={`${styles.suitThumbnail} my-1 p-2`}
                key={data.id}
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .6)),url(${data.imageUrl})`,
                  borderRadius: '15px',
                  marginLeft: '.5rem'
                }}
              >
                
              </div>
            ))}
        </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  suitsData: state.suits
})

const mapDispatchToProps = dispatch => ({
  suitsRequest: data => dispatch(fetchSuits(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Suits)
