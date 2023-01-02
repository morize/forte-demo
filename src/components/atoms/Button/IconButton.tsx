import styled from 'styled-components';
import BaseButton, { IBaseButton } from './BaseButton';

export interface IIconButton extends IBaseButton {
  icon: JSX.Element;
  hasBorder?: boolean;
}

const SIconButton = styled(BaseButton)<{ hasBorder?: boolean }>`
  padding: 0;
  border: ${(props) => (props.hasBorder ? '1px solid black' : 'none')};

  & p {
    margin: 4px 0;
  }
`;

const IconButton = ({ icon, hasBorder, ...baseButtonProps }: IIconButton) => (
  <SIconButton children={icon} hasBorder={hasBorder} {...baseButtonProps} />
);

export default IconButton;
