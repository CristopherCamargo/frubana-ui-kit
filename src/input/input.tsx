import React from 'react';
import { InputWrapper, InputGroupWrapper } from './styles';

interface Props {
  value?: string | number;
  type?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  fluid?: boolean;
}

const Input = ({ value = '', type = 'text', left, right, fluid }: Props) => (
  <InputGroupWrapper left={left} right={right} fluid={fluid}>
    {left}
    <InputWrapper type={type} {...(value && { value })} />
    {right}
  </InputGroupWrapper>
);

export default Input;
