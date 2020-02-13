import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    flex: 1;
    border-radius: 0px;
  }
  button:nth-child(1) {
    border-radius: ${props => (props.theme ? props.theme.borderRadius : '0px')}
      0px 0px ${props => (props.theme ? props.theme.borderRadius : '0px')};
  }
  button:last-child {
    border-radius: 0px
      ${props => (props.theme ? props.theme.borderRadius : '0px')}
      ${props => (props.theme ? props.theme.borderRadius : '0px')} 0px;
  }
`;

export { ButtonGroupWrapper };
