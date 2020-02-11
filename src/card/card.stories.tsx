import React from 'react';
import Card from './card';
import { ThemeProvider } from 'styled-components';
import { GreenTheme } from '../themes';

export default {
  title: 'Card Component',
};

const main = () => (
  <ThemeProvider theme={GreenTheme}>
    <Card>Esto es una card</Card>
  </ThemeProvider>
);

export { main };
