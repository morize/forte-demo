import styled from 'styled-components';
import { Props } from 'react-select';

import SelectButton from '../../atoms/Button/SelectButton';
import IconButton from '../../atoms/Button/IconButton';
import { Search, Back, Close } from '../../atoms/Icons/Icons';

export interface ISearchButton extends Props {
  isOpen: boolean;
  onSearchbuttonClicked: () => void;
}

const SSearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  & button {
    height: 100%;
  }

  & div:last-child {
    height: 100%;
  }
`;

const SSearchBarSelect = styled(SelectButton)`
  display: flex;
  width: 100%;

  & .select__control {
    display: flex;
    width: 100%;
    border-left: none;
  }
`;

const SearchButton = ({
  isOpen,
  onSearchbuttonClicked,
  ...rest
}: ISearchButton) => {
  return (
    <SSearchContainer>
      <IconButton
        icon={isOpen ? <Back /> : <Search />}
        hasBorder
        onClick={() => onSearchbuttonClicked()}
      />
      {isOpen && (
        <SSearchBarSelect
          isClearable
          autoFocus
          isSearchable
          components={{ DropdownIndicator: () => <Close /> }}
          {...rest}
        />
      )}
    </SSearchContainer>
  );
};

export default SearchButton;
