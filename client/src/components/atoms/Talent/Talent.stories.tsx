import Talent, { ITalent } from './Talent';

export default {
  title: 'Atoms',
};

export const TalentItem = (args: ITalent) => <Talent {...args} />;

const domainOptions = [
  'executing',
  'influencing',
  'relationship_building',
  'strategic_thinking',
];

TalentItem.story = {
  name: 'Talent Item',
  argTypes: {
    domain: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentItem.args = {
  talent: 'Onpartijdheid',
  placement: 1,
  domain: 'executing',
};
