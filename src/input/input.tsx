import React from 'react';
import { ThemeProvider } from 'styled-components';
import { InputWrapper, InputGroupWrapper } from './styles';
import { FrubanaUIKitSizes } from '..';
import { defaultTheme } from '../theme';

interface Props {
  value?: string | number;
  type?: string;
  size?: FrubanaUIKitSizes;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Input = ({
  value = '',
  type = 'text',
  size = 'medium',
  left,
  right,
}: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <InputGroupWrapper left={left} right={right}>
      {left}
      <InputWrapper type={type} />
      {right}
    </InputGroupWrapper>
  </ThemeProvider>
);

export default Input;
