import styled from 'styled-components';

const FormWrapper = styled.form``;

const FormFieldWrapper = styled.div<{ error?: string }>`
  display: block;
  input,
  .frubana-ui-select {
    ${props => props.error && `border: 1px solid ${props.theme.colors.red};`};
  }
  span {
    color: ${props => props.theme.colors.red};
    display: block;
  }
`;

export { FormWrapper, FormFieldWrapper };
