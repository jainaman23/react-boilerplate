import { css } from 'styled-components';

const Styles = css`
  border: 1px solid ${props => props.theme.colors.greyColor};
  padding: ${props => props.theme.size.remSize(15)} ${props => props.theme.size.remSize(20)};
  font-size: ${props => props.theme.size.remSize(16)};
  ${props => props.variation === 'fullWidth' && `width: 100%;`}
  }
`;

export default Styles;
