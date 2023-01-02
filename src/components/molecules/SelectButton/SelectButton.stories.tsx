import { useState } from 'react';

import SelectButton, {
  SelectButtonProps,
} from '../../molecules/SelectButton/SelectButton';

export default {
  title: 'Molecules',
};

const options = [
  { label: 'Alles', value: 'alles' },
  { label: 'Uitvoeren', value: 'uitvoeren' },
  { label: 'Beinvloeden', value: 'beinvloeden' },
  { label: 'Relatie Bouwen', value: 'relatie bouwen' },
  { label: 'Strategisch Denken', value: 'strategisch denken' },
];

export const ButtonSelect = (args: SelectButtonProps) => {
  const [selectValue, setSelectValue] = useState(options[0]);

  return (
    <SelectButton
      value={selectValue}
      onChange={(option) =>
        setSelectValue(option as { label: string; value: string })
      }
      {...args}
    />
  );
};

ButtonSelect.story = {
  name: 'Select Button',
};

ButtonSelect.args = {
  options: options,
};
