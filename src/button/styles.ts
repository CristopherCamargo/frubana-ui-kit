import styled, { DefaultTheme } from 'styled-components';

interface Props {
  primary?: boolean;
  basic?: string;
  fluid?: boolean;
  circular?: boolean;
}

const Button = styled.button`
  padding: 8px;
  border-radius: 6px;
  height: 40px;
  font-size: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0;
  appearance: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
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
  return 'white';
};

const size = (fluid?: boolean, circular?: boolean) => {
  if (circular) {
    return '40px';
  }
  if (fluid) {
    return '100%';
  }
  return '140px';
};

const border = (theme?: DefaultTheme, basic?: string, primary?: boolean) => {
  if (basic === 'basic' && primary) {
    return `border-color: ${
      theme ? theme.colors.primary : 'initial'
    }; border: 1px solid;`;
  }
  if (basic === 'very') {
    return 'border-color: transparent;';
  }
  return `box-shadow: ${theme ? theme.boxShadow : 'none'};`;
};

const ButtonWrapper = styled(Button)<Props>`
  width: ${props => size(props.fluid, props.circular)};
  background-color: ${props =>
    background(props.theme, props.primary, props.basic)};
  color: ${props => color(props.theme, props.primary, props.basic)};

  ${props => props.circular && 'border-radius: 50%'};

  ${props => (props.basic === 'basic' ? `background-color: white` : '')};
  ${props => border(props.theme, props.basic, props.primary)}
  button {
    border: 0;
  }
`;

export { ButtonWrapper };
