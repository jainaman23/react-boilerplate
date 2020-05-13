import { css } from 'styled-components';

const Styles = css`
  &:before {
    content: '${props => props.theme.icons[props.type]}';
  }
  font-family: icomoon;
  font-style: initial;
`;

export default Styles;
