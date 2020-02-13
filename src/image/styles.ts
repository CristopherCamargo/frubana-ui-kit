import styled from 'styled-components';
import { FrubanaUIKitSizes } from '../';

const sizes: Record<FrubanaUIKitSizes, string> = {
  mini: '27px',
  large: '440px',
  medium: '220px',
  small: '110px',
};

const ImageWrapper = styled.img<{ size: FrubanaUIKitSizes }>`
  width: ${props => sizes[props.size]};
`;

export { ImageWrapper };
