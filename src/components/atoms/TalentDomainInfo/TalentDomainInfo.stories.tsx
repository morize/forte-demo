import TalentDomainInfoComp, { ITalentDomainInfo } from './TalentDomainInfo';

export default {
  title: 'Atoms',
};

export const TalentDomainInfo = (args: ITalentDomainInfo) => (
  <TalentDomainInfoComp {...args} />
);

const domainOptions = [
  'alles',
  'uitvoeren',
  'beinvloeden',
  'relatie bouwen',
  'strategisch denken',
];

TalentDomainInfo.story = {
  name: 'Talent Domain Info',
  argTypes: {
    domain: {
      options: domainOptions,
      control: { type: 'select' },
    },
  },
};

TalentDomainInfo.args = {
  domain: 'beinvloeden',
};
