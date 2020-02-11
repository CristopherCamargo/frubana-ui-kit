import React, { useContext } from 'react';
import {
  Edit2,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  PlusCircle,
  Power,
  Trash,
} from 'react-feather';
import { ThemeContext, DefaultTheme } from 'styled-components';
import { FrubanaIcons, FrubanaUIKitSizes } from '..';

type colors = 'green' | 'default' | 'white';

const sizes: Record<FrubanaUIKitSizes, number> = {
  small: 15,
  medium: 25,
  large: 50,
};

interface Ico {
  color?: colors;
  size?: number;
}

interface Props {
  name: FrubanaIcons;
  size?: FrubanaUIKitSizes;
  color?: colors;
}

const icons: Record<FrubanaIcons, (props: Ico) => React.ReactNode> = {
  edit: props => <Edit2 {...props} />,
  'chevron-right': props => <ChevronRight {...props} />,
  'chevron-up': props => <ChevronUp {...props} />,
  'chevron-left': props => <ChevronLeft {...props} />,
  'chevron-down': props => <ChevronDown {...props} />,
  'arrow-right': props => <ArrowRight {...props} />,
  'arrow-left': props => <ArrowLeft {...props} />,
  'plus-circle': props => <PlusCircle {...props} />,
  power: props => <Power {...props} />,
  trash: props => <Trash {...props} />,
};

const Icon = ({ name, color = 'default', size = 'small' }: Props) => {
  const themeContext: DefaultTheme = useContext(ThemeContext);
  return (
    <>
      {icons[name]({
        color: themeContext
          ? (themeContext.colors[color] as colors)
          : 'default',
        size: sizes[size],
      })}
    </>
  );
};

export default Icon;
