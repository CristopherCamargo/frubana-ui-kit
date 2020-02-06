import React from 'react';
import { FrubanaUIKitSizes } from '..';
import { ImageWrapper } from './styles';

interface Props {
  src: string;
  size?: FrubanaUIKitSizes;
}

const Image = ({ src, size = 'medium' }: Props) => (
  <ImageWrapper src={src} size={size} />
);

export default Image;
