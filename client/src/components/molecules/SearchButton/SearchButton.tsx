import styled from 'styled-components';
import { Props } from 'react-select';

import SelectButton from '../../atoms/Button/SelectButton';
import IconButton from '../../atoms/Button/IconButton';
import { Search, Back } from '../../atoms/Icons/Icons';

export interface ISearchButton extends Props {
  isSearchbarOpen: boolean;
  onSearchButtonClicked: () => void;
}

const SSearchContainer = styled.div`
  display: flex;
  flex: 1;

  & > div {
    width: 100%;

    & .select__control {
      border-left: none;
      cursor: default;
    }

    & .select__dropdown-indicator {
      display: none;
    }
  }
`;

const SearchButton = ({
  isSearchbarOpen,
  onSearchButtonClicked,
  ...selectProps
}: ISearchButton) => (
  <SSearchContainer>
    <IconButton
      icon={isSearchbarOpen ? <Back /> : <Search />}
      hasBorder
      onClick={onSearchButtonClicked}
    />
    {isSearchbarOpen && (
      <SelectButton
        isClearable
        isSearchable
        autoFocus
        openMenuOnClick={false}
        openMenuOnFocus={false}
        {...selectProps}
      />
    )}
  </SSearchContainer>
);

export default SearchButton;
