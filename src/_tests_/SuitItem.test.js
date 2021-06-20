import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
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

  test('renders component consistently to the DOM', () => {
    const test = renderer.create(
      <Provider store={store}>
        <SuitItem />
      </Provider>,
    ).toJSON();

    expect(test).toMatchSnapshot();
  });
});
