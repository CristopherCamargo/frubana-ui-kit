import React, { useState, useCallback } from 'react';
import { SelectWrapper, Option, SelectLabel, SelectList } from './styles';
import { FrubanaSelectOption, FrubanaUIKitSizes } from '..';
import { ChevronUp, ChevronDown } from 'react-feather';

interface Props {
  selected?: string | number;
  fluid?: boolean;
  options: FrubanaSelectOption[];
  onSelect?: (value: string | number) => void;
  size?: FrubanaUIKitSizes;
  basic?: boolean;
}

const Select = ({
  options,
  selected = '',
  size = 'medium',
  onSelect,
  basic,
  fluid,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleOption = useCallback(
    value => {
      setOpen(false);
      if (onSelect) {
        onSelect(value);
      }
    },
    [open]
  );

  return (
    <SelectWrapper onClick={handleOpen} size={size} fluid={fluid}>
      <SelectLabel
        size={size}
        basic={basic}
        className="frubana-ui-select"
        fluid={fluid}
      >
        {options[selected] ? options[selected].label : ''}
        {open ? <ChevronUp color="#9b9b9b" /> : <ChevronDown color="#9b9b9b" />}
      </SelectLabel>
      {open && (
        <SelectList size={size}>
          {options.map(option => (
            <Option
              key={option.key}
              value={option.value}
              onClick={() => handleOption(option.value)}
            >
              {option.label}
            </Option>
          ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};

export default Select;
