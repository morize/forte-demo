import TalentInfoHeader, { ITalentInfoHeader } from './TalentInfoHeader';

export default {
  title: 'Molecules',
};

const domainOptions = [
  'executing',
  'influencing',
  'relationship_building',
  'strategic_thinking',
];

export const TalentInfoHeaderItem = (args: ITalentInfoHeader) => (
  <div style={{ padding: '8px 12px' }}>
    <TalentInfoHeader {...args} />
  </div>
);

TalentInfoHeaderItem.story = {
  name: 'TalentInfoHeader Item',
  argTypes: {
    domain: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentInfoHeaderItem.args = { talentName: "Leergierigheid", domainName: "Strategisch Denken", placement: 3, domain: 'strategic_thinking' };
