import React from 'react';
import { InputWrapper, InputGroupWrapper, InputIconRight } from './styles';

interface Props {
  value?: string | number;
  type?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fluid?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: () => void;
  onFocus?: () => void;
}

const Input = ({
  value = '',
  type = 'text',
  left,
  right,
  iconRight,
  fluid,
  placeholder,
  onChange,
  onBlur,
  onFocus,
}: Props) => (
  <InputGroupWrapper left={left} right={right} fluid={fluid}>
    {left}
    <InputWrapper
      type={type}
      {...(value && { value })}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
    />
    {iconRight && <InputIconRight>{iconRight}</InputIconRight>}
    {right}
  </InputGroupWrapper>
);

export default Input;
