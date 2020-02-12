import React from 'react';
import Input from './input';
import { Select } from '../select';
import { FrubanaSelectOption } from '..';
import { GreenTheme } from '../themes';
import { ThemeProvider } from 'styled-components';
import { Icon } from '../icon';

export default {
  title: 'Input component',
};

const data: FrubanaSelectOption[] = [
  {
    value: 1,
    key: 1,
    label: '+57',
  },
  {
    value: 2,
    key: 2,
    label: '+58',
  },
];

const main = () => (
  <ThemeProvider theme={GreenTheme}>
    <Input placeholder="hola" />
    <br />
    <Input fluid />
  </ThemeProvider>
);

const withSelect = () => (
  <ThemeProvider theme={GreenTheme}>
    <Input left={<Select selected={1} options={data} />} />
    <br />
    <Input right={<Select selected={1} options={data} />} />
  </ThemeProvider>
);

const withIcons = () => (
  <ThemeProvider theme={GreenTheme}>
    <Input iconRight={<Icon name="alert-triangle" color="orange" />} />
  </ThemeProvider>
);

export { main, withSelect, withIcons };
