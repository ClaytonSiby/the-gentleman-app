import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
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
});
