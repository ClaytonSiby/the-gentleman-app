import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
  });

  test('renders consistently to the DOM', () => {
    const test = renderer.create(<Header />).toJSON();

    expect(test).toMatchSnapshot();
  })
});
