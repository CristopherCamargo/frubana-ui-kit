import React, { useState, useCallback, useRef, useEffect } from 'react';
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

const useOutside = (refLabel: any, refList: any, handleClose: Function) => {
  const handleClickOutside = (event: any) => {
    if (
      refLabel.current &&
      refList.current &&
      !refLabel.current.contains(event.target) &&
      !refList.current.contains(event.target)
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

const Select = ({
  options,
  selected = '',
  size = 'medium',
  onSelect,
  basic,
  fluid,
}: Props) => {
  const [open, setOpen] = useState(false);

  const refLabel: any = useRef(null);
  const refList: any = useRef(null);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useOutside(refLabel, refList, handleClose);

  const handleOption = useCallback(
    value => {
      setOpen(false);
      if (onSelect) {
        onSelect(value);
      }
    },
    [open]
  );

  let label = '';
  if (selected) {
    const founded = options.find(
      object => object.key === selected || object.value === selected
    );
    if (founded) {
      label = founded.label;
    }
  }

  return (
    <SelectWrapper onClick={handleOpen} size={size} fluid={fluid}>
      <SelectLabel
        size={size}
        basic={basic}
        className="frubana-ui-select"
        fluid={fluid}
        ref={refLabel}
      >
        {label}
        {open ? <ChevronUp color="#9b9b9b" /> : <ChevronDown color="#9b9b9b" />}
      </SelectLabel>
      {open && (
        <SelectList size={size} ref={refList}>
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
