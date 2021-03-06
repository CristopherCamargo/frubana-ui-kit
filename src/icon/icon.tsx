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
  AlertTriangle,
  Check,
  Plus,
  Frown,
} from 'react-feather';
import { ThemeContext, DefaultTheme } from 'styled-components';
import { FrubanaIcons, FrubanaUIKitSizes } from '..';

type colors = 'green' | 'default' | 'white' | 'orange';

const sizes: Record<FrubanaUIKitSizes, number> = {
  mini: 7,
  small: 15,
  medium: 25,
  large: 50,
};

interface Ico {
  color?: colors;
  size?: number;
  className: string;
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
  'alert-triangle': props => <AlertTriangle {...props} />,
  check: props => <Check {...props} />,
  plus: props => <Plus {...props} />,
  frown: props => <Frown {...props} />,
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
        className: 'frubana ui-icon',
      })}
    </>
  );
};

export default Icon;
