// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './Icon.style';
import Props from './Icon.props';

const Icon = ({ className, type }: Props) => React.createElement('i', { className, type });

export default styled(Icon)`
  ${styles}
`;
