import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import Suits from '../components/Suits'

const initialState = {
  addAppointment: { loading: false, message: '', error: '' },
  appointments: { loading: false, data: [], error: '' },
  login: {
    loading: false,
    loggedIn: false,
    user: {},
    userToken: '',
    error: ''
  },
  removeAppointment: { loading: false, message: '', error: '' },
  signup: {
    loading: false,
    loggedIn: false,
    user: {},
    userToken: '',
    error: ''
  },
  suitItem: { loading: false, suit: {}, error: '' },
  suits: { loading: false, suits: [], error: '' }
}

const mockStore = configureStore()
const store = mockStore(initialState)

describe('Suits', () => {
  test('Suits component renders successfully', () => {
    render(
      <Provider store={store}>
        <Suits />
      </Provider>
    )
  })
})
