import styled from 'styled-components';

const InputGroupWrapper = styled.div`
  *:not(input) {
    width: 45px;
    height: 30px;
  }
`;

const InputWrapper = styled.input`
  padding: 8px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.25);
  background-color: #ffffff;
  :focus {
    outline: none;
  }
`;

export { InputWrapper, InputGroupWrapper };
