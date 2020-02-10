import React from 'react';
import { FormWrapper, FormFieldWrapper } from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';

interface FormProps {
  children?: React.ReactNode;
}

const Form = ({ children }: FormProps) => <FormWrapper>{children}</FormWrapper>;

interface FormFieldProps {
  children?: React.ReactNode;
  error?: string;
}

const FormField = ({ children, error }: FormFieldProps) => (
  <ThemeProvider theme={defaultTheme}>
    <FormFieldWrapper error={error}>
      {children}
      {error && <span>*{error}</span>}
    </FormFieldWrapper>
  </ThemeProvider>
);

export { Form, FormField };
