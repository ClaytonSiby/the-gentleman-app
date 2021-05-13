import React, { useEffect, useState } from 'react'
import fetchSuits from '../redux/suits/get/suitActions'
import { connect, useSelector } from 'react-redux'
import ReactLoading from 'react-loading'
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
              >
                <img src={`${data.imageUrl}`} />
                <p className={`${styles.hide}`}> { data.name } </p>
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
