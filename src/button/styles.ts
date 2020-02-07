import styled, { DefaultTheme } from 'styled-components';

const Button = styled.button`
  padding: 8px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  :focus {
    outline: none;
  }
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

const ButtonWrapper = styled(Button)<{ primary: boolean; basic: string }>`
  background-color: ${props =>
    background(props.theme, props.primary, props.basic)};
  color: ${props => color(props.theme, props.primary, props.basic)};
  border-color: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.default};

  ${props => (props.basic === 'basic' ? `background-color: white` : '')};
  ${props =>
    props.basic === 'very'
      ? `border-color: transparent;`
      : 'box-shadow: 0 2px 6px 0 rgba(154, 167, 57, 0.19);'};
`;

export { ButtonWrapper };
