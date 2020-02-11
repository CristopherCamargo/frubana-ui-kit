import React from 'react';
import { CardWrapper } from './styles';

interface Props {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => <CardWrapper>{children}</CardWrapper>;

export default Card;
