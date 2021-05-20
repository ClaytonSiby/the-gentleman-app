import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
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

  test('renders consistently to the DOM', () => {
    const test = renderer.create(
      <Provider store={store}>
        <SignUp />
      </Provider>
    ).toJSON();

    expect(test).toMatchSnapshot();
  })
});
