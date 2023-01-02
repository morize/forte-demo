import SearchButton, { ISearchButton } from './SearchButton';

export default {
  title: 'Molecules',
};

export const SearchButtonItem = (args: ISearchButton) => (
  <SearchButton {...args} />
);

SearchButtonItem.story = {
  name: 'Search Button',
};
