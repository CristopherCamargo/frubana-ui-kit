import React from 'react';
import { Form, FormField } from './form';
import { Input, Select } from '..';
import { ThemeProvider } from 'styled-components';
import { GreenTheme } from '../themes';

export default {
  title: 'Form Component',
};

const data = [
  {
    key: 1,
    value: 1,
    label: 'Hola',
  },
  {
    key: 2,
    value: 2,
    label: 'Como estas',
  },
];

const main = () => (
  <ThemeProvider theme={GreenTheme}>
    <Form>
      <FormField>
        <Input />
      </FormField>
      <br />
      <FormField error={'Hubo un error'}>
        <Input />
      </FormField>
      <br />
      <FormField error={'Hubo un error'}>
        <Select options={data} />
      </FormField>
      <br />
      <FormField error={'Hubo un error'}>
        <Input left={<Select options={data} selected={1} />} />
      </FormField>
    </Form>
  </ThemeProvider>
);

export { main };
