import styled from 'styled-components';
import BaseButton, { IBaseButton } from './BaseButton';

export interface IIconButton extends IBaseButton {
  icon?: JSX.Element;
  hasBorder?: boolean;
}

const SIconButton = styled(BaseButton)<IIconButton>`
  height: 100%;
  padding: 0;
  border: ${(props) => (props.hasBorder ? '1px solid black' : 'none')};
`;

const IconButton = ({ icon, hasBorder, ...rest }: IIconButton) => (
  <SIconButton children={icon} hasBorder={hasBorder} {...rest} />
);

export default IconButton;
