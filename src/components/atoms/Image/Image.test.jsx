import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Image from '.';

describe('Image Component', () => {
  it('should render type correctly', () => {
    const { container } = renderWithTheme(<Image />);
    expect(container).toBeTruthy();
  });
});