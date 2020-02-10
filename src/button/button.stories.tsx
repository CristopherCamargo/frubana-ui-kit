import React from 'react';
import Button from './button';

export default {
  title: 'Button component',
};

const types = () => (
  <>
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
  </>
);

const icon = () => (
  <>
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
  </>
);

export { types, icon };
