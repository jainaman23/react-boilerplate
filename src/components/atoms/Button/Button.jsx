// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './Button.style';
import { Props } from './Button.props';

const Button = ({ className, children, disabled, onClick }: Props) =>
  React.createElement('button', { className, disabled, onClick }, children);

export default styled(Button)`
  ${styles};
`;
