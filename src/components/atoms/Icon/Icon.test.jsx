import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Icon from '.';

describe('Icon Component', () => {
  it('should render icon correctly', () => {
    const { container } = renderWithTheme(<Icon />);
    expect(container.querySelector('i')).toBeTruthy();
  });
});
