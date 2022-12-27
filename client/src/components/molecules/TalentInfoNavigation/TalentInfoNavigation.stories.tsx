import TalentInfoNavigation, {
  ITalentInfoNavigation,
} from './TalentInfoNavigation';

export default {
  title: 'Molecules',
};

export const TalentInfoNavigationItem = (args: ITalentInfoNavigation) => (
  <TalentInfoNavigation {...args} />
);

TalentInfoNavigationItem.story = {
  name: 'TalentInfoNavigation Item',
};