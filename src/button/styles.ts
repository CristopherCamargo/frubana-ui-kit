import styled, { DefaultTheme } from 'styled-components';

const Button = styled.button`
  padding: 8px;
  border-radius: 6px;
  height: 40px;
  font-size: 1em;
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
  span > * {
    vertical-align: middle;
  }
`;

const color = (
  theme?: DefaultTheme,
  primary?: boolean,
  basic?: string
): string => {
  if (primary && basic && theme) {
    return theme.colors.primary;
  }
  if (primary) {
    return 'white';
  }
  return 'initial';
};

const background = (
  theme?: DefaultTheme,
  primary?: boolean,
  basic?: string
): string => {
  if (basic) {
    const res = {
      basic: 'white',
      very: 'transparent',
    };
    return res[basic];
  }
  if (primary && theme) {
    return theme.colors.primary;
  }
  return 'initial';
};

const size = (fluid?: boolean) => {
  if (fluid) {
    return '100%';
  }
  return '140px';
};

const ButtonWrapper = styled(Button)<{
  primary?: boolean;
  basic?: string;
  fluid?: boolean;
}>`
  width: ${props => size(props.fluid)};
  background-color: ${props =>
    background(props.theme, props.primary, props.basic)};
  color: ${props => color(props.theme, props.primary, props.basic)};
  border-color: ${props =>
    props.primary && props.theme
      ? props.theme.colors.primary
      : props.theme
      ? props.theme.colors.default
      : 'white'};

  ${props => (props.basic === 'basic' ? `background-color: white` : '')};
  ${props =>
    props.basic === 'very'
      ? `border-color: transparent;`
      : `box-shadow: ${props.theme.boxShadow};`}
`;

export { ButtonWrapper };
