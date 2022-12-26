import TalentInfoBox, { ITalentInfoBox } from './TalentInfoBox';

export default {
  title: 'Atoms',
};

const domainOptions = [
  'executing',
  'influencing',
  'relationship_building',
  'strategic_thinking',
];

export const TalentInfoBoxItem = (args: ITalentInfoBox) => <TalentInfoBox {...args} />;

TalentInfoBoxItem.story = {
  name: 'TalentInfoBox Item',
  argTypes: {
    domain: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentInfoBoxItem.args = {
  info: 'Van nature bent u mogelijk teleurgesteld in uzelf als het u niet lukt iemand op zijn gemak te stellen. Misschien wilt u uw goedkeuring geven aan alle soorten mensen, ongeacht hun leeftijd, nationaliteit, inkomen, baan, opleiding, religie, handicap of uiterlijk.',
  domain: 'executing',
};
