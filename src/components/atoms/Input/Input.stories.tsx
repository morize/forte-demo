import BaseInput, { IBaseInput } from './BaseInput';

export default {
  title: 'Atoms',
};

export const InputBase = (args: IBaseInput) => (
  <BaseInput {...args} />
);

InputBase.story = {
  name: 'Input Base',
};

InputBase.args = {
  label: "Naam",
  placeholder: "Geef je doel een naam (maximaal 4 woorden)"
};
