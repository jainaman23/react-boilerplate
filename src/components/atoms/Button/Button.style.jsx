import { css } from 'styled-components';

const Styles = css`
  cursor: pointer;
  ${props =>
    props.variant === 'icon' &&
    `
      background-color: transparent;
      border: none;
    `}
  &[disabled],
  .disabled {
    color: ${props => props.theme.colors.greyColor};
  }
`;

export default Styles;
