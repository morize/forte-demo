import styled from "styled-components";
import BaseButton, { IBaseButton } from "./BaseButton";

export interface IIconButton extends IBaseButton {
  icon?: JSX.Element;
  hasBorder?: boolean;
}

const SIconButton = styled(BaseButton)<IIconButton>`
  border: ${(props) => (props.hasBorder ? "1px solid black" : "none")};
  width: 84px;
  height: 84px;
  
  & svg {
    min-width: 32px;
    min-height: 32px;

    & path {
      fill: black;
    }
  }
`;

const IconButton = ({ icon, hasBorder, ...rest }: IIconButton) => {
  return <SIconButton children={icon} hasBorder={hasBorder} {...rest} />;
};

export default IconButton;
