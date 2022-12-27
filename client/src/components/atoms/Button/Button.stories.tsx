import BaseButton, { IBaseButton } from './BaseButton';
import HorizontalIconButton from './HorizontalIconButton';
import IconButton, { IIconButton } from './IconButton';

import { Menu, ExpandMore } from '../../atoms/Icons/Icons';

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

export const ButtonIcon = (args: IIconButton) => <IconButton {...args} />;
ButtonIcon.story = {
  name: 'Icon Button',
};

ButtonIcon.args = {
  label: 'Menu',
  icon: <Menu />,
};

export const ButtonHorizontalIcon = (args: IBaseButton) => (
  <HorizontalIconButton {...args} />
);
ButtonHorizontalIcon.story = {
  name: 'Dropdown Button',
};
ButtonHorizontalIcon.args = {
  label: 'Relaties Bouwen',
  children: <ExpandMore />,
};
