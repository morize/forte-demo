import TalentInfoBoxComp, { ITalentInfoBox } from './TalentInfoBox';

export default {
  title: 'Atoms',
};

const domainOptions = [
  'alles',
  'uitvoeren',
  'beinvloeden',
  'relatie bouwen',
  'strategisch denken',
];

export const TalentInfoBox= (args: ITalentInfoBox) => <TalentInfoBoxComp {...args} />;

TalentInfoBox.story = {
  name: 'TalentInfoBox Item',
  argTypes: {
    domain: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentInfoBox.args = {
  info: 'Van nature bent u mogelijk teleurgesteld in uzelf als het u niet lukt iemand op zijn gemak te stellen. Misschien wilt u uw goedkeuring geven aan alle soorten mensen, ongeacht hun leeftijd, nationaliteit, inkomen, baan, opleiding, religie, handicap of uiterlijk.',
  domain: 'uitvoeren',
};
