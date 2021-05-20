import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('Footer renders successfully', () => {
    render(<Footer />);
  });
});
