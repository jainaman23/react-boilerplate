// @flow
import React from 'react';
import styled from 'styled-components';
import style from './Heading.style';
import { Props } from './Heading.props';

const Heading = ({ className, type, children }: Props) => {
  return React.createElement(type, { className }, children);
};

Heading.defaultProps = {
  type: 'h2',
};

export default styled(Heading)`
  ${style}
`;
