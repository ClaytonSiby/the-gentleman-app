import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import SuitItem from '../pages/SuitItem';
import store from './Suits.test';

describe('SuitItem', () => {
  it('Renders the SuitItem page successfully', () => {
    render(
      <Provider store={store}>
        <SuitItem />
      </Provider>,
    );
  });
});
