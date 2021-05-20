import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../App'

describe('RouteGenerator', () => {
  it('Renders the RouteGenerator successfully', () => {
    render(<App />)
  })

  it('renders the output consistently to the DOM', () => {
    const test = renderer.create(<App />).toJSON()

    expect(test).toMatchSnapshot()
  })
})
