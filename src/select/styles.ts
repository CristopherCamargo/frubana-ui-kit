import styled from 'styled-components';
import { FrubanaUIKitSizes } from '..';

const size: Record<FrubanaUIKitSizes, string> = {
  large: '280px',
  medium: '220px',
  small: '120px',
};

const SelectWrapper = styled.div<{ size: string }>`
  cursor: pointer;
  position: relative;
  width: ${props => size[props.size]};
  display: inline-block;
`;

const SelectLabel = styled.div<{ size: string }>`
  padding: 8px;
  box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.25);
  border-radius: ${props => props.theme.borderRadius};
  display: inline-block;
  svg {
    float: right;
  }
  width: ${props => size[props.size]};
`;

const SelectList = styled.ul<{ size: string }>`
  position: absolute;
  top: 50%;
  z-index: 99;
  background: white;
  border: none;
  list-style-type: none;
  padding: 0px 14px 0px 0px;
  box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.25);
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  :focus {
    outline: none;
  }
`;

const Option = styled.li`
  padding: 8px;
  width: 100%;
  background-color: white;
  :hover {
    background-color: rgba(155, 155, 155, 0.15);
  }
`;

export { SelectWrapper, Option, SelectLabel, SelectList };
