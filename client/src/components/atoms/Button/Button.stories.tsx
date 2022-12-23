import BaseButton, { IBaseButton } from './BaseButton';
import DropdownButton from './DropdownButton';
import IconButton, { IIconButton } from './IconButton';

import { MenuIcon } from '../../atoms/Icons/Icons';

export default {
  title: 'Atoms',
};

export const ButtonBase = (args: IBaseButton) => <BaseButton {...args} />;
ButtonBase.story = {
  name: 'Base Button',
};
ButtonBase.args = {
  label: 'Click me',
};

export const ButtonDropdown = (args: IBaseButton) => <DropdownButton {...args} />;
ButtonDropdown.story = {
  name: 'Dropdown Button',
};
ButtonDropdown.args = {
  label: 'Relaties Bouwen',
};

export const ButtonIcon = (args: IIconButton) => <IconButton {...args} />;
ButtonIcon.story = {
  name: 'Icon Button',
};

ButtonIcon.args = {
  label: 'Menu',
  hasBorder: false,
  icon: <MenuIcon />,
};
