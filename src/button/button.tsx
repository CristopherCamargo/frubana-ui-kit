import React from 'react';
import { ButtonWrapper } from './styles';
import { FrubanaBasicTypes, FrubanaIcons } from '..';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
import { Icon } from '../icon';

type placements = 'left' | 'right';

interface Props {
  children?: React.ReactNode;
  primary?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  basic?: FrubanaBasicTypes;
  icon?: FrubanaIcons;
  placement?: placements;
}

const Button = ({
  children,
  primary,
  basic,
  icon,
  onClick,
  placement = 'right',
}: Props) => (
  <ThemeProvider theme={defaultTheme}>
    <ButtonWrapper primary={primary} basic={basic} onClick={onClick}>
      {icon && placement === 'left' && (
        <Icon name={icon} size="small" {...(primary && { color: 'white' })} />
      )}
      <span>{children}</span>{' '}
      {icon && placement === 'right' && (
        <Icon name={icon} size="small" {...(primary && { color: 'white' })} />
      )}
    </ButtonWrapper>
  </ThemeProvider>
);

export default Button;
