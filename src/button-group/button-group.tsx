import React from 'react';
import { ButtonGroupWrapper } from './styles';

interface Props {
  children?: React.ReactNode;
}

const ButtonGroup = ({ children }: Props) => (
  <ButtonGroupWrapper className="frubana ui-button-group">
    {children}
  </ButtonGroupWrapper>
);

export default ButtonGroup;
