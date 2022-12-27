import styled from 'styled-components';

import BaseButton, { IBaseButton } from './BaseButton';
import { ExpandMore } from '../Icons/Icons';

const SHorizontalIconButton = styled(BaseButton)`
  flex-direction: row-reverse;
`;

const HorizontalIconButton = ({ ...rest }: IBaseButton) => (
  <SHorizontalIconButton children={<ExpandMore />} {...rest} />
);

export default HorizontalIconButton;
