import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import IconButton, {IIconButton} from '../../atoms/Button/IconButton';
import BaseInput from '../../atoms/Input/BaseInput';
import { Search, Back } from '../../atoms/Icons/Icons';

export interface ISearchButton {}

const SSearchButton = styled.div`
  display: flex;
  align-items: center;
  height: 48px;

  & button {
    height: 100%;
  }

  & div:last-child {
    border-left: 0;
    height: 100%;
    flex: 1;
  }
`;

const SearchButton = ({}: ISearchButton) => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isOpened && focusInput();
  }, [isOpened]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <SSearchButton>
      <IconButton
        icon={isOpened ? <Back /> : <Search />}
        hasBorder
        onClick={() => setIsOpened(!isOpened)}
      />
      {isOpened && (
        <BaseInput
          ref={inputRef}
          value={searchInputValue}
          isClearable
          onChange={(e) => setSearchInputValue(e.target.value)}
          onCloseButtonClicked={() => setSearchInputValue('')}
        />
      )}
    </SSearchButton>
  );
};

export default SearchButton;
