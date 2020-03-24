import React from 'react';
import { CardWrapper } from './styles';

interface Props {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => (
  <CardWrapper className="frubana ui-card">{children}</CardWrapper>
);

export default Card;
