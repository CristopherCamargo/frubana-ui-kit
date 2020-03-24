import React from 'react';
import { FrubanaUIKitSizes } from '..';
import { ImageWrapper } from './styles';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size?: FrubanaUIKitSizes;
}

const Image = ({ src, size = 'medium' }: Props) => (
  <ImageWrapper src={src} size={size} className="frubana ui-img" />
);

export default Image;
