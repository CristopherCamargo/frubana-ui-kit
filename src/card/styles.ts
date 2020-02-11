import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: ${props => (props.theme ? props.theme.boxShadow : 'none')};
`;

export { CardWrapper };
