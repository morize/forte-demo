import TalentInfoNavigation from './TalentInfoNavigation';

export default {
  title: 'Molecules',
};

export const TalentInfoNavigationItem = () => (
  <TalentInfoNavigation
    onNavigationItemClicked={(navigationValue) => {
      console.log(navigationValue);
    }}
  />
);

TalentInfoNavigationItem.story = {
  name: 'TalentInfoNavigation Item',
};
