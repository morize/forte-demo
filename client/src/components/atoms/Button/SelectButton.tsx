import styled from 'styled-components';
import Select, {
  components,
  Props,
  DropdownIndicatorProps,
  ClearIndicatorProps,
} from 'react-select';

import { Close, ExpandMore } from '../Icons/Icons';

const SSelect = styled(Select)`
  display: flex;
  font-size: 14px;

  & .select__control {
    width: 100%;
    padding: 0 0 0 16px;
    border: 1px solid black;
    border-radius: 0;
    cursor: pointer;

    &:hover {
      border-color: black;
    }
  }

  & .select__control--is-focused {
    box-shadow: none;
  }

  & .select__indicator-separator {
    display: none;
  }

  & .select__value-container {
    padding: 0;
  }

  & .select__menu {
    min-width: 180px;
  }

  & .select__indicators {
    height: 100%;

    & > .select__indicator {
      padding: 0;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    font-size: 12px;

    & .select__control {
      padding: 0 0 0 14px;
    }
  }
`;

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <ExpandMore />
  </components.DropdownIndicator>
);

const ClearIndicator = (props: ClearIndicatorProps) => (
  <components.ClearIndicator {...props}>
    <Close />
  </components.ClearIndicator>
);

const SelectButton = (selectProps: Props) => (
  <SSelect
    components={{ DropdownIndicator, ClearIndicator }}
    classNamePrefix="select"
    {...selectProps}
  />
);

export default SelectButton;
