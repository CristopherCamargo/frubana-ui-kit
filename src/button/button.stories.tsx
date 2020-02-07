import React from 'react';
import Button from './button';

export default {
  title: 'Button component',
};

const primary = () => <Button primary>Boton</Button>;

const basic = () => (
  <Button primary basic="basic">
    Boton
  </Button>
);

const veryBasic = () => (
  <Button primary basic="very">
    Boton
  </Button>
);

export { primary, basic, veryBasic };
