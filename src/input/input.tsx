import React from 'react';
import { InputWrapper, InputGroupWrapper, InputIconRight } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
  left?: React.ReactNode;
  right?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  fluid?: boolean;
}

const Input = ({
  ref,
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
  <InputGroupWrapper
    ref={ref}
    left={left}
    right={right}
    fluid={fluid}
    className="frubana ui-input-wrapper"
  >
    {left}
    <InputWrapper
      type={type}
      {...(value && { value })}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      className="frubana ui-input"
    />
    {iconRight && <InputIconRight>{iconRight}</InputIconRight>}
    {right}
  </InputGroupWrapper>
);

export default Input;
