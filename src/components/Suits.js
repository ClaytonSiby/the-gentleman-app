import React, { useEffect, useState } from 'react'
import fetchSuits from '../redux/suits/get/suitActions'
import { connect, useSelector } from 'react-redux'
import ReactLoading from 'react-loading'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

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
    <Container>
      {!loadingComplete ? (
        <div>
          <ReactLoading type='bars' color='green' height={70} width={80} />
        </div>
      ) : (
        <Row>
          {
            suitsData && suitsData.suits && suitsData.suits.map(data => (
              <Col xs={12} sm={12} md={3} key={Math.floor(Math.random() * 1000)}>
                { data.name }
              </Col>
            ) )
          }
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
