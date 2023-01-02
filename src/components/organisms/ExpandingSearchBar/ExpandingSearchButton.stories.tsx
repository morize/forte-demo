import { useState } from 'react';

import ExpandingSearchBar from './ExpandingSearchBar';

import { talentOptions } from '../../../seeders/TalentenSeeder';

export default {
  title: 'Organisms',
};

export const ExpandingSearchbar = () => {
  const [isSearchBarOpen, setIsSearchbarOpen] = useState(false);

  const handleOnSearchButtonClicked = () => {
    setIsSearchbarOpen(!isSearchBarOpen);
  };

  return (
    <ExpandingSearchBar
      isSearchbarOpen={isSearchBarOpen}
      onSearchButtonClicked={handleOnSearchButtonClicked}
      options={talentOptions}
      onChange={(option) => console.log(option)}
    />
  );
};

ExpandingSearchbar.story = {
  name: 'Search Button',
};
