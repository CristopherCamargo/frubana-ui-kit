import React from 'react';
import Select from './select';

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
  <>
    <Select selected={1} options={data} size="small" />
    <br />
    <br />
    <Select selected={1} options={data} size="medium" />
    <br />
    <br />
    <Select selected={1} options={data} size="large" />
  </>
);

const type = () => (
  <>
    <Select selected={1} options={data} />
    <br />
    <br />
    <Select selected={1} options={data} basic />
  </>
);

export { main, type };
