import React from 'react';
import { ButtonGroupWrapper } from './styles';

interface Props {
  children?: React.ReactNode;
}

const ButtonGroup = ({ children }: Props) => (
  <ButtonGroupWrapper>{children}</ButtonGroupWrapper>
);

export default ButtonGroup;
