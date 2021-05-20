import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import SignUp from '../pages/SignUp';
import store from './Suits.test';

describe('SignUp', () => {
  it('Renders the SignUp page successfully', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );
  });
});
