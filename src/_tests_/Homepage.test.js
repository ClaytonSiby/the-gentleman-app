import React from 'react';
import { render } from '@testing-library/react';
import Homepage from '../pages/Homepage';

describe('Homepage', () => {
  test('Renders the Homepage component successfully', () => {
    render(<Homepage />);
  });
});
