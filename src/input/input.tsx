import React from 'react';
import { InputWrapper } from './styles';
import { FrubanaUIKitSizes } from '..';

interface Props {
  value?: string | number;
  type?: string;
  size?: FrubanaUIKitSizes;
}

const Input = ({ value, type = 'text', size = 'medium' }: Props) => (
  <InputWrapper type={type} />
);

export default Input;
