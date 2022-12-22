import BaseButton, { IBaseButton } from './BaseButton';
import DropdownButton from './DropdownButton';
import IconButton, { IIconButton } from './IconButton';

import { MenuIcon } from '../../atoms/Icons/Icons';

export default {
  title: 'Button',
};

export const Base = (args: IBaseButton) => <BaseButton {...args} />;
Base.story = {
  name: 'Base Button',
};
Base.args = {
  label: 'Click me',
};

export const Dropdown = (args: IBaseButton) => <DropdownButton {...args} />;
Dropdown.story = {
  name: 'Dropdown Button',
};
Dropdown.args = {
  label: 'Relaties Bouwen',
};

export const Icon = (args: IIconButton) => <IconButton {...args} />;
Icon.story = {
  name: 'Icon Button',
};

Icon.args = {
  label: 'Menu',
  hasBorder: false,
  icon: <MenuIcon />,
};
