import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
  });
});
