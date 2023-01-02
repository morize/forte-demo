import PageNavigation, { IPageNavigation } from './PageNavigation';

export default {
  title: 'Molecules',
};

export const PageNavigationItem = (args: IPageNavigation) => (
  <PageNavigation {...args} />
);

PageNavigationItem.story = {
  name: 'Base Button',
};
PageNavigationItem.args = {
  pageTitle: 'Mijn Talenten',
  pageSubtitle: 'Verantwoordelijkheidsbesef',
  hasBackButton: true,
  hasMoreButton: true,
};
