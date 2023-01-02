import { useState } from 'react';

import BaseButton, { IBaseButton } from './BaseButton';
import SelectButton from './SelectButton';
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

type OptionType = { label: string; value: string };

export const ButtonSelect = () => {
  const [selectValue, setSelectValue] = useState({
    label: 'Alles',
    value: 'alles',
  });

  return (
    <SelectButton
      value={selectValue}
      onChange={(option) => setSelectValue(option as OptionType)}
      options={[
        { label: 'Alles', value: 'alles' },
        { label: 'Uitvoeren', value: 'uitvoeren' },
        { label: 'Beinvloeden', value: 'beinvloeden' },
        { label: 'Relatie Bouwen', value: 'relatie_bouwen' },
        { label: 'Strategisch Denken', value: 'strategisch_denken' },
      ]}
    />
  );
};

ButtonSelect.story = {
  name: 'Select Button',
};
