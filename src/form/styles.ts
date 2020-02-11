import styled from 'styled-components';

const FormWrapper = styled.form``;

const FormFieldWrapper = styled.div<{ error?: string }>`
  display: block;
  input,
  .frubana-ui-select {
    ${props =>
      props.error &&
      `border: 1px solid ${props.theme ? props.theme.colors.red : 'red'};`};
  }
  span {
    color: ${props => (props.theme ? props.theme.colors.red : 'red')};
    display: block;
  }
`;

export { FormWrapper, FormFieldWrapper };
