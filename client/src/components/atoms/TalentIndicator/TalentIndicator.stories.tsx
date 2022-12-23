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
  influencingPerc: 20,
  relBuildingPerc: 10,
  stratThinkingPerc: 10,
};
