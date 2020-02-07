import React from 'react';
import { ButtonWrapper } from './styles';
import { FrubanaBasicTypes } from '..';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';

interface Props {
  children?: React.ReactNode;
  primary?: boolean;
  onClick?: Function;
  basic?: FrubanaBasicTypes;
}

const Button = ({ children, primary, basic }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <ButtonWrapper primary={primary} basic={basic}>
      {children}
    </ButtonWrapper>
  </ThemeProvider>
);

export default Button;
