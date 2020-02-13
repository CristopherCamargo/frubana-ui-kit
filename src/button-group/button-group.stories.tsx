import React from 'react';
import ButtonGroup from './button-group';
import Button from '../button/button';
import { ThemeProvider } from 'styled-components';
import { GreenTheme } from '../themes';

export default {
  title: 'Button Group Component',
};

const main = () => (
  <ThemeProvider theme={GreenTheme}>
    <ButtonGroup>
      <Button primary>Algo</Button>
      <Button>Otro</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup>
      <Button>Primero</Button>
      <Button>Segundo</Button>
      <Button>Tercero</Button>
    </ButtonGroup>
  </ThemeProvider>
);

export { main };
