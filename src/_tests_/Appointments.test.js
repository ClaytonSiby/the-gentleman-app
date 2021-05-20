import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Appointments from '../pages/Appointments';
import store from './Suits.test';

describe('Appointments', () => {
  test('Renders the Appointments component successfully', () => {
    render(
      <Provider store={store}>
        <Appointments />
      </Provider>,
    );
  });

  test('renders consistently to the DOM without breaking', () => {
    const test = renderer.create(
      <Provider store={store}>
        <Appointments />
      </Provider>
    ).toJSON();

    expect(test).toMatchSnapshot();
  })
});
