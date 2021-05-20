import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Login from '../pages/Login';
import store from './Suits.test';

describe('Login', () => {
  it('Renders the Login page successfully', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
  });
});
