import React from 'react';
import { FormWrapper, FormFieldWrapper } from './styles';

interface FormProps {
  children?: React.ReactNode;
}

const Form = ({ children }: FormProps) => (
  <FormWrapper className="frubana ui-form">{children}</FormWrapper>
);

interface FormFieldProps {
  children?: React.ReactNode;
  error?: string;
}

const FormField = ({ children, error }: FormFieldProps) => (
  <FormFieldWrapper error={error} className="frubana ui-form-field">
    {children}
    {error && <span>*{error}</span>}
  </FormFieldWrapper>
);

export { Form, FormField };
