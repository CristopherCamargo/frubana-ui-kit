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

const width = (
  left?: React.ReactNode,
  right?: React.ReactNode,
  fluid?: boolean
) => {
  if (fluid) {
    return '100%';
  }
  if (left || right) {
    return '220px';
  }
  return '120px';
};

const InputGroupWrapper = styled.div<{
  left?: React.ReactNode;
  right?: React.ReactNode;
  fluid?: boolean;
}>`
  display: flex;
  width: ${props => width(props.left, props.right, props.fluid)};
  .frubana-ui-select {
    width: max-content;
    border-radius: ${props => divBorder(props.left, props.right)};
  }
  input {
    border-radius: ${props => border(props.left, props.right)};
  }
`;

const InputIconRight = styled.div`
  position: relative;
  top: 16px;
  right: 25px;
  width: 0px;
`;

const InputWrapper = styled.input`
  padding: 8px 25px 8px 8px;
  border: none;
  height: 30px;
  font-size: 1em;
  width: 100%;
  box-shadow: ${props => (props.theme ? props.theme.boxShadow : 'none')};
  background-color: #ffffff;
  :focus {
    outline: none;
  }
`;

export { InputWrapper, InputGroupWrapper, InputIconRight };
