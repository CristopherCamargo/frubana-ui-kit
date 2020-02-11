import React from 'react';
import { ButtonWrapper } from './styles';
import { FrubanaBasicTypes, FrubanaIcons } from '..';
import { Icon } from '../icon';

type placements = 'left' | 'right';

interface Props {
  children?: React.ReactNode;
  primary?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  basic?: FrubanaBasicTypes;
  icon?: FrubanaIcons;
  placement?: placements;
  fluid?: boolean;
}

const Button = ({
  children,
  primary,
  basic,
  icon,
  onClick,
  fluid,
  placement = 'right',
}: Props) => (
  <ButtonWrapper
    primary={primary}
    basic={basic}
    onClick={onClick}
    fluid={fluid}
  >
    {icon && placement === 'left' && (
      <Icon name={icon} size="small" {...(primary && { color: 'white' })} />
    )}
    <span>{children}</span>{' '}
    {icon && placement === 'right' && (
      <Icon name={icon} size="small" {...(primary && { color: 'white' })} />
    )}
  </ButtonWrapper>
);

export default Button;
