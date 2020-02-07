import React from 'react';
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
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
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
  return (
    <ThemeProvider theme={defaultTheme}>
      {icons[name]({
        color: defaultTheme.colors[color] as colors,
        size: sizes[size],
      })}
    </ThemeProvider>
  );
};

export default Icon;
