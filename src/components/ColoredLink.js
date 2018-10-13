import styled from 'styled-components';
import designPrinciples from '../designPrinciples';

const ColoredLink = styled.a`
  color: ${designPrinciples.colorStandard};
  &:hover {
    color: ${designPrinciples.colorSpecial};
  }
`

export default ColoredLink;
