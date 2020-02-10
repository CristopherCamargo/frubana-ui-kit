import React from 'react';
import { ThemeProvider } from 'styled-components';
import { InputWrapper, InputGroupWrapper } from './styles';
import { defaultTheme } from '../theme';

interface Props {
  value?: string | number;
  type?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  fluid?: boolean;
}

const Input = ({ value = '', type = 'text', left, right, fluid }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <InputGroupWrapper left={left} right={right} fluid={fluid}>
      {left}
      <InputWrapper type={type} {...(value && { value })} />
      {right}
    </InputGroupWrapper>
  </ThemeProvider>
);

export default Input;
