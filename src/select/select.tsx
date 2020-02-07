import React, { useState, useCallback } from 'react';
import { SelectWrapper, Option, SelectLabel, SelectList } from './styles';
import { FrubanaSelectOption, FrubanaUIKitSizes } from '..';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
import { ChevronUp, ChevronDown } from 'react-feather';

interface Props {
  selected?: string | number;
  options: FrubanaSelectOption[];
  onSelect?: (value: string | number) => void;
  size?: FrubanaUIKitSizes;
}

const Select = ({
  options,
  selected = '',
  size = 'medium',
  onSelect,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleOption = useCallback(
    value => {
      setOpen(false);
      onSelect(value);
    },
    [open]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <SelectWrapper onClick={handleOpen} size={size}>
        <SelectLabel size={size}>
          {options[selected].label}
          {open ? (
            <ChevronUp color="#9b9b9b" />
          ) : (
            <ChevronDown color="#9b9b9b" />
          )}
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
    </ThemeProvider>
  );
};

export default Select;
