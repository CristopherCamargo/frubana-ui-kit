import React from 'react';
import Button from './button';
import { ThemeProvider } from 'styled-components';
import { GreenTheme } from '../themes';
import { Icon } from '../icon';

export default {
  title: 'Button component',
};

const types = () => (
  <ThemeProvider theme={GreenTheme}>
    <Button primary>Boton</Button>
    <br />
    <br />
    <Button primary basic="basic">
      Boton
    </Button>
    <br />
    <br />
    <Button primary basic="very">
      Boton
    </Button>
  </ThemeProvider>
);

const icon = () => (
  <ThemeProvider theme={GreenTheme}>
    <Button icon="arrow-right" primary>
      Boton
    </Button>
    <br />
    <br />
    <Button icon="arrow-left" basic="basic" placement="left">
      Boton
    </Button>
    <br />
    <br />
    <Button icon="arrow-right" basic="very">
      Boton
    </Button>
    <br />
    <br />
    <Button circular>
      <Icon name="plus" />
    </Button>
  </ThemeProvider>
);

export { types, icon };
