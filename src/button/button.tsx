import React from 'react';
import { ButtonWrapper } from './styles';
import { FrubanaBasicTypes, FrubanaIcons } from '..';
import { Icon } from '../icon';

type placements = 'left' | 'right';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | JSX.Element;
  primary?: boolean;
  basic?: FrubanaBasicTypes;
  icon?: FrubanaIcons;
  placement?: placements;
  fluid?: boolean;
  circular?: boolean;
}

const Button = ({
  children,
  primary,
  basic,
  icon,
  onClick,
  fluid,
  placement = 'right',
  circular,
}: Props) => (
  <ButtonWrapper
    primary={primary}
    basic={basic}
    onClick={onClick}
    fluid={fluid}
    circular={circular}
    className="frubana ui-button"
  >
    {icon && placement === 'left' && (
      <Icon name={icon} {...(primary && { color: 'white' })} />
    )}
    <span>{children}</span>{' '}
    {icon && placement === 'right' && (
      <Icon name={icon} {...(primary && { color: 'white' })} />
    )}
  </ButtonWrapper>
);

export default Button;
