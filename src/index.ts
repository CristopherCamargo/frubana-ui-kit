import { Button } from './button';
import { Image } from './image';
import { Input } from './input';
import { Icon } from './icon';
import { Card } from './card';
import { Form, FormField } from './form';
import { Select } from './select';

type FrubanaUIKitSizes = 'large' | 'medium' | 'small';
type FrubanaBasicTypes = 'basic' | 'very';
type FrubanaIcons =
  | 'edit'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-down'
  | 'arrow-right'
  | 'arrow-left'
  | 'plus-circle'
  | 'power'
  | 'trash';

interface FrubanaSelectOption {
  key: string | number;
  label: string;
  value: string | number;
}

export {
  Button,
  Image,
  Input,
  Icon,
  FrubanaUIKitSizes,
  FrubanaBasicTypes,
  FrubanaSelectOption,
  FrubanaIcons,
  Card,
  Form,
  FormField,
  Select,
};
