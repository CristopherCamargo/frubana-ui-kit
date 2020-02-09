import React from 'react';
import { CardWrapper } from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';

interface Props {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <CardWrapper>{children}</CardWrapper>
  </ThemeProvider>
);

export default Card;
