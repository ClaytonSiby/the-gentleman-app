import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('Footer renders successfully', () => {
    render(<Footer />);
  });

  test('Renders consistently to the DOM', () => {
    const test = renderer.create(<Footer />).toJSON();

    expect(test).toMatchSnapshot();
  });
});
