import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fff;
  padding: 24px;
  box-shadow: ${props => (props.theme ? props.theme.boxShadow : 'none')};
`;

export { CardWrapper };
