import React from 'react';
import Input from './input';
import { Select } from '../select';
import { FrubanaSelectOption } from '..';

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
  <>
    <Input />
    <br />
    <Input fluid />
  </>
);

const withSelect = () => (
  <>
    <Input left={<Select selected={1} options={data} />} />
    <br />
    <Input right={<Select selected={1} options={data} />} />
  </>
);

export { main, withSelect };
