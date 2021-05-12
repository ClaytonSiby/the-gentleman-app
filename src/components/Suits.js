import React, { useEffect, useState } from 'react'
import fetchSuits from '../redux/suits/get/suitActions'
import { connect, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Suits = ({ suitsData, suitsRequest }) => {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const auth_token = useSelector(state => state.signup.userToken)

  useEffect(() => {
    ;(async () => {
      await suitsRequest(auth_token)
    })()
    setLoadingComplete(true)
  }, [])

  return !loadingComplete ? (
    <div>Loading....</div>
  ) : auth_token === undefined && auth_token === 'undefined' ? (
    <div>
      {suitsData.error}
      <Redirect to='/login' />
    </div>
  ) : (
    suitsData &&
    suitsData.suits.map((data) => <div>{JSON.stringify(data)}</div>)
  )
}

const mapStateToProps = state => ({
  suitsData: state.suits
})

const mapDispatchToProps = dispatch => ({
  suitsRequest: data => dispatch(fetchSuits(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Suits)
