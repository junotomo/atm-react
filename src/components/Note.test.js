import React from 'react';
import { render } from '@testing-library/react';
import { Note } from './Note'; // Assuming this is the correct path to your Note component

describe('Note component', () => {
  it('renders with correct note image based on props', () => {
    const props = {
      notetype: 10, // Change this according to your test case
      quantity: 3, // Change this according to your test case
    };

    const { getByAltText, getByText } = render(<Note {...props} />);

    // Assert that the correct quantity is rendered
    expect(getByText('x 3')).toBeInTheDocument();

    // Assert that the correct note image is rendered
    const expectedImageSrc = `../../src/assets/10_reais.png`; // Change this according to your test case
    expect(getByAltText('')).toHaveAttribute('src', expectedImageSrc);
  });

  // Add more test cases as needed
});