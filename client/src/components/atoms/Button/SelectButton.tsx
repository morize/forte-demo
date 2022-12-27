import styled from 'styled-components';
import Select, { Props } from 'react-select';

import { ExpandMore } from '../Icons/Icons';

const SSelect = styled(Select)`
  display: inline-flex;

  & .select__control {
    display: inline-flex;
    padding: 0 0 0 16px;
    border: 1px solid black;
    border-radius: 0;
    cursor: pointer;

    &:hover {
      border-color: black;
    }

    @media (max-width: 500px) {
      padding: 0 0 0 14px;
    }
  }

  & .select__control--is-focused {
    outline: 0;
    box-shadow: none;

    &:hover {
      border-color: black;
    }
  }
  & .select__indicator-separator {
    display: none;
  }

  & .select__indicator svg {
    fill: black;
    font-weight: 500;
  }

  & .select__value-container {
    font-size: 14px;
    padding: 0;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  & .select__menu {
    font-size: 14px;
    min-width: 180px;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  & .select__single-value {
    color: black;
    padding: 0;
  }
`;

const DropdownIndicator = () => <ExpandMore />;

const SelectButton = (props: Props) => {
  return (
    <SSelect
      isSearchable={false}
      components={{ DropdownIndicator }}
      classNamePrefix="select"
      {...props}
    />
  );
};

export default SelectButton;
