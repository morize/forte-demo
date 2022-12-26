import TalentInfo, { ITalentInfo } from './TalentInfo';

export default {
  title: 'Atoms',
};

export const TalentInfoItem = (args: ITalentInfo) => <TalentInfo {...args} />;

TalentInfoItem.story = {
  name: 'TalentInfo Item',
};

TalentInfoItem.args = {
  info: 'Van nature bent u mogelijk teleurgesteld in uzelf als het u niet lukt iemand op zijn gemak te stellen. Misschien wilt u uw goedkeuring geven aan alle soorten mensen, ongeacht hun leeftijd, nationaliteit, inkomen, baan, opleiding, religie, handicap of uiterlijk.',
  domain: 'executing',
};
