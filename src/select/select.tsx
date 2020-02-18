import React, { useState, useCallback, useRef, useEffect } from 'react';
import { SelectWrapper, Option, SelectLabel, SelectList } from './styles';
import { FrubanaSelectOption, FrubanaUIKitSizes } from '..';
import { ChevronUp, ChevronDown } from 'react-feather';
import { Input } from '../input';

const accentMap: any = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  Á: 'A',
  É: 'E',
  Í: 'I',
  Ó: 'O',
  Ú: 'U',
};

function accentFold(s: string): string {
  if (!s) {
    return '';
  }
  let ret = '';
  for (let i = 0; i < s.length; i += 1) {
    ret += accentMap[s.charAt(i)] || s.charAt(i);
  }
  return ret;
}

function filterLabel(search: string, label: string): boolean {
  if (search !== '') {
    return accentFold(label.toLocaleLowerCase()).includes(
      accentFold(search.toLocaleLowerCase())
    );
  }
  return true;
}

interface Props {
  selected?: string | number;
  fluid?: boolean;
  options: FrubanaSelectOption[];
  onSelect?: (value: string | number) => void;
  size?: FrubanaUIKitSizes;
  basic?: boolean;
  search?: boolean;
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
  search,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);
  const [text, setText] = useState<string>('');
  const [write, setWrite] = useState(false);

  const refLabel = useRef(null);
  const refList = useRef(null);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setWrite(true);
    setText('');
  }, []);

  useEffect(() => {
    const filter = options.filter(currentOption => {
      return filterLabel(text, currentOption.label);
    });
    setCurrentOptions(filter);
  }, [options, text]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useOutside(refLabel, refList, handleClose);

  const handleOption = useCallback(value => {
    setOpen(false);
    setWrite(false);
    if (onSelect) {
      onSelect(value);
    }
  }, []);

  let label = '';
  if (selected) {
    const founded = options.find(
      object => object.key === selected || object.value === selected
    );
    if (founded) {
      label = founded.label;
    }
  }

  const chevron = open ? (
    <ChevronUp color="#9b9b9b" />
  ) : (
    <ChevronDown color="#9b9b9b" />
  );

  return (
    <SelectWrapper ref={refLabel} size={size} fluid={fluid}>
      {search ? (
        <Input
          fluid={fluid}
          {...(selected && !write ? { value: label } : { value: text })}
          iconRight={chevron}
          onFocus={handleOpen}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      ) : (
        <SelectLabel
          size={size}
          basic={basic}
          onClick={handleOpen}
          className="frubana-ui-select"
          fluid={fluid}
        >
          {label}
          {chevron}
        </SelectLabel>
      )}
      {open && (
        <SelectList size={size} ref={refList}>
          {currentOptions.map(option => (
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
