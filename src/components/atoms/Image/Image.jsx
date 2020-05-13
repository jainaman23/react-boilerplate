// @flow
import React from 'react';
import styled from 'styled-components';
import { Props } from './Image.props';

import styles from './Image.style';

const Image = ({ className, src, alt }: Props) =>
  React.createElement('img', { className, src, alt });

export default styled(Image)`
  ${styles};
`;
