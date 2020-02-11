import React from 'react';
import Select from './select';
import { GreenTheme } from '../themes';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Select component',
};

const data = [
  {
    key: 1,
    value: 1,
    label: 'Primer dato',
  },
  {
    key: 2,
    value: 2,
    label: 'Segundo dato',
  },
];

const main = () => (
  <ThemeProvider theme={GreenTheme}>
    <Select selected={1} options={data} size="small" />
    <br />
    <br />
    <Select selected={1} options={data} size="medium" />
    <br />
    <br />
    <Select selected={1} options={data} size="large" />
  </ThemeProvider>
);

const type = () => (
  <ThemeProvider theme={GreenTheme}>
    <Select selected={1} options={data} />
    <br />
    <br />
    <Select selected={1} options={data} basic />
  </ThemeProvider>
);

export { main, type };
