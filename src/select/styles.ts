import styled from 'styled-components';
import { FrubanaUIKitSizes } from '..';

const size: Record<FrubanaUIKitSizes, string> = {
  large: '280px',
  medium: '220px',
  small: '120px',
};

const SelectWrapper = styled.div<{ size: string; fluid?: boolean }>`
  cursor: pointer;
  position: relative;
  width: ${props => (props.fluid ? '100%' : 'auto')};
  display: inline-block;
  background-color: #fff;
  font-size: 1em;
`;

const SelectLabel = styled.div<{
  size: string;
  basic?: boolean;
  fluid?: boolean;
}>`
  height: 30px;
  padding: 8px;
  ${props =>
    !props.basic &&
    `box-shadow: ${props.theme ? props.theme.boxShadow : 'none'}`};
  border-radius: ${props => (props.theme ? props.theme.borderRadius : 'none')};
  display: inline-block;
  background-color: #fff;
  line-height: 26px;
  svg {
    float: right;
  }
  width: ${props =>
    props.fluid ? '-webkit-fill-available' : size[props.size]};
`;

const SelectList = styled.ul<{ size: string }>`
  position: absolute;
  top: 50%;
  z-index: 99;
  background: #fff;
  border: none;
  list-style-type: none;
  padding: 0px 14px 0px 0px;
  box-shadow: 0 2px 4px 0 rgba(155, 155, 155, 0.25);
  border-radius: ${props => (props.theme ? props.theme.borderRadius : 'none')};
  width: 100%;
  :focus {
    outline: none;
  }
`;

const Option = styled.li`
  padding: 8px;
  width: 100%;
  height: 30px;
  background-color: #fff;
  :hover {
    background-color: rgba(155, 155, 155, 0.15);
  }
`;

export { SelectWrapper, Option, SelectLabel, SelectList };
