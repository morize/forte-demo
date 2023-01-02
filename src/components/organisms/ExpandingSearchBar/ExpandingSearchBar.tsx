import styled from 'styled-components';

import SelectButton, {
  SelectButtonProps,
} from '../../molecules/SelectButton/SelectButton';
import IconButton from '../../atoms/Button/IconButton';

import { Search, Back } from '../../atoms/Icons/Icons';

export interface IExpandingSearchBar extends SelectButtonProps {
  isSearchbarOpen: boolean;
  onSearchButtonClicked: () => void;
}

const SExpandingSearchBar = styled.div`
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

const ExpandingSearchBar = ({
  isSearchbarOpen,
  onSearchButtonClicked,
  ...selectProps
}: IExpandingSearchBar) => (
  <SExpandingSearchBar>
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
  </SExpandingSearchBar>
);

export default ExpandingSearchBar;
