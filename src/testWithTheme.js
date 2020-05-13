// @flow
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

type Props = {
  component: void,
  options: void,
};

const renderWithTheme = (component, options): Props =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>, { options });

export default renderWithTheme;
