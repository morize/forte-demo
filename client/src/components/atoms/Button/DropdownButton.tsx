import styled from "styled-components";

import BaseButton, { IBaseButton } from "./BaseButton";
import { ExpandMore } from "../Icons/Icons";

interface IDropdownButton extends IBaseButton {}

const SDropdownButton = styled(BaseButton)`
  flex-direction: row-reverse;
  justify-content: flex-start;
  width: auto;
  font-size: 14px;
  
  & svg {
    display: flex;
    width: 30px;
    height: 30px;
    margin-left: 12px;
  }
`;

const DropdownButton = ({ ...rest }: IDropdownButton) => {
  return <SDropdownButton children={<ExpandMore />} {...rest} />;
};

export default DropdownButton;
