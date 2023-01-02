import TalentInfoHeader, { ITalentInfoHeader } from './TalentInfoHeader';

export default {
  title: 'Molecules',
};

const domainOptions = [
  'alles',
  'uitvoeren',
  'beinvloeden',
  'relatie bouwen',
  'strategisch denken',
];

export const TalentInfoHeaderItem = (args: ITalentInfoHeader) => (
  <div style={{ width: '400px', padding: '8px 12px', margin: 'auto' }}>
    <TalentInfoHeader {...args} />
  </div>
);

TalentInfoHeaderItem.story = {
  name: 'TalentInfoHeader Item',
  argTypes: {
    domainName: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentInfoHeaderItem.args = {
  talentName: 'Leergierigheid',
  domainName: 'uitvoeren',
  placement: 3,
};
