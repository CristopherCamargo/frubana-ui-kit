import React from 'react';
import Select from './select';
import { GreenTheme } from '../themes';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Select component',
};

const data = [
  {
    key: '+1',
    value: '+1',
    label: '+1',
  },
  {
    key: '+57',
    value: '+57',
    label: '+57',
  },
  {
    key: '+52',
    value: '+52',
    label: '+52',
  },
  {
    key: '+55',
    value: '+55',
    label: '+55',
  },
];

const main = () => (
  <ThemeProvider theme={GreenTheme}>
    <Select selected="+1" options={data} size="small" />
    <br />
    <br />
    <Select selected="+1" options={data} size="medium" />
    <br />
    <br />
    <Select selected="+1" options={data} size="large" />
  </ThemeProvider>
);

const type = () => (
  <ThemeProvider theme={GreenTheme}>
    <Select selected="+1" options={data} />
    <br />
    <br />
    <Select selected="+1" options={data} basic />
  </ThemeProvider>
);

const search = () => (
  <ThemeProvider theme={GreenTheme}>
    <Select search selected="+1" options={data} />
  </ThemeProvider>
);

export { main, type, search };
