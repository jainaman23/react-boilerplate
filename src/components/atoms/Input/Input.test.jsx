import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Input from '.';

describe('Input Component', () => {
  it('should render type correctly', () => {
    const { container } = renderWithTheme(<Input />);
    expect(container.querySelector('input')).toBeTruthy();
  });

  it('Should render children correctly', () => {
    const { container } = renderWithTheme(<Input />);
    expect(container.querySelector('input').type).toEqual('text');
  });
});
