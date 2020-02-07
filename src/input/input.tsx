import React from 'react';
import { InputWrapper, InputGroupWrapper } from './styles';
import { FrubanaUIKitSizes } from '..';

interface Props {
  value?: string | number;
  type?: string;
  size?: FrubanaUIKitSizes;
  left?: React.ReactNode;
}

const Input = ({ value = '', type = 'text', size = 'medium', left }: Props) => (
  <InputGroupWrapper>
    {left}
    <InputWrapper type={type} />
  </InputGroupWrapper>
);

export default Input;
