import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Homepage from '../pages/Homepage';

describe('Homepage', () => {
  test('Renders the Homepage component successfully', () => {
    render(<Homepage />);
  });

  test('renders consistently to the DOM', () => {
    const test = renderer.create(<Homepage />).toJSON();

    expect(test).toMatchSnapshot();
  })
});
