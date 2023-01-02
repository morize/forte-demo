import Talent, { ITalent } from './Talent';

export default {
  title: 'Atoms',
};

export const TalentItem = (args: ITalent) => <Talent {...args} />;

const domainOptions = [
  'alles',
  'uitvoeren',
  'beinvloeden',
  'relatie bouwen',
  'strategisch denken',
];

TalentItem.story = {
  name: 'Talent Item',
  domain: {
    domainName: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentItem.args = {
  talent: 'Onpartijdheid',
  domain: 'uitvoeren',
  placement: 1,
  onTalentClicked: (talent: string) => console.log(talent),
};
