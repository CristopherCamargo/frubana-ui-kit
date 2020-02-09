import styled from 'styled-components';

const divBorder = (left?: React.ReactNode, right?: React.ReactNode) => {
  if (left) {
    return '5px 0px 0px 5px';
  }
  if (right) {
    return '0px 5px 5px 0px';
  }
  return '5px';
};

const border = (left?: React.ReactNode, right?: React.ReactNode) => {
  if (left && right) {
    return '0px';
  }
  if (left) {
    return '0px 5px 5px 0px';
  }
  if (right) {
    return '5px 0px 0px 5px';
  }
  return '5px';
};

const InputGroupWrapper = styled.div<{
  left?: React.ReactNode;
  right?: React.ReactNode;
}>`
  display: flex;
  div {
    width: auto;
    border-radius: ${props => divBorder(props.left, props.right)};
  }
  input {
    border-radius: ${props => border(props.left, props.right)};
  }
`;

const InputWrapper = styled.input`
  padding: 8px;
  border: none;
  height: 28px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: #ffffff;
  :focus {
    outline: none;
  }
`;

export { InputWrapper, InputGroupWrapper };
