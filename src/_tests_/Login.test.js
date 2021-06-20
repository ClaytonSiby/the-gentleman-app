import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

  test('Renders consistently to the DOM', () => {
    const test = renderer.create(
      <Provider store={store}>
        <Login />
      </Provider>,
    ).toJSON();

    expect(test).toMatchSnapshot();
  });
});
