import BaseInput, { IBaseInput } from './BaseInput';

export default {
  title: 'Atoms',
};

export const BaseInputItem = (args: IBaseInput) => (
  <BaseInput {...args} />
);

BaseInputItem.story = {
  name: 'BaseInput Item',
};

BaseInputItem.args = {
  label: "Naam",
  placeholder: "Geef je doel een naam (maximaal 4 woorden) "
};
