import NavigationTitleComp, { INavigationTitle } from './NavigationTitle';

export default {
  title: 'Atoms',
};

export const NavigationTitle = (args: INavigationTitle) => (
  <div style={{ width: '100%', position: 'relative', height: '100px' }}>
    <NavigationTitleComp {...args} />
  </div>
);

NavigationTitle.story = {
  name: 'Navigation Title',
};

NavigationTitle.args = {
  title: 'Title',
  subTitle: 'Subtitle',
};
