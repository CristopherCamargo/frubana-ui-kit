import styled, { DefaultTheme } from 'styled-components';

const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  appearance: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.7;
  }

  -webkit-appearance: none;
  span + svg,
  svg + span {
    margin-left: 4px;
  }
`;

const color = (theme: DefaultTheme, primary?: boolean, basic?: string) => {
  if (primary && basic) {
    return theme.colors.primary;
  }
  if (primary) {
    return 'white';
  }
};

const background = (theme: DefaultTheme, primary?: boolean, basic?: string) => {
  if (basic) {
    const res = {
      basic: 'white',
      very: 'transparent',
    };
    return res[basic];
  }
  if (primary) {
    return theme.colors.primary;
  }
};

const size = (fluid?: boolean) => {
  if (fluid) {
    return '100%';
  }
  return '80px';
};

const ButtonWrapper = styled(Button)<{
  primary: boolean;
  basic: string;
  fluid?: boolean;
}>`
  width: ${props => size(props.fluid)};
  background-color: ${props =>
    background(props.theme, props.primary, props.basic)};
  color: ${props => color(props.theme, props.primary, props.basic)};
  border-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.default};

  ${props => (props.basic === 'basic' ? `background-color: white` : '')};
  ${props =>
    props.basic === 'very'
      ? `border-color: transparent;`
      : `box-shadow: ${props.theme.boxShadow};`}
`;

export { ButtonWrapper };
