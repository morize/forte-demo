import TalentIndicator, { ITalentIndicator } from './TalentIndicator';

export default {
  title: 'Atoms',
};

export const TalentIndicatorItem = (args: ITalentIndicator) => (
  <TalentIndicator {...args} />
);

TalentIndicatorItem.story = {
  name: 'TalentIndicator Item',
};

TalentIndicatorItem.args = {
  executingPerc: 60,
  influencingPerc: 30,
  relBuildingPerc: 5,
  stratThinkingPerc: 5,
};
