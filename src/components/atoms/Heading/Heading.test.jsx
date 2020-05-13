import React from 'react';
import renderWithTheme from '../../../testWithTheme';
import Heading from '.';

describe('Heading Component', () => {
  it('should render type correctly', () => {
    const { container } = renderWithTheme(<Heading type="h2">Testing</Heading>);
    expect(container.querySelector('h2')).toBeTruthy();
  });

  it('Should render children correctly', () => {
    const content = 'Testing';
    const { container } = renderWithTheme(<Heading type="h2">{content}</Heading>);
    expect(container.querySelector('h2').textContent).toEqual(content);
  });
});
