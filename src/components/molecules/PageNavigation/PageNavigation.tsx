import styled from 'styled-components';

import NavigationTitle from '../../atoms/NavigationTitle/NavigationTitle';
import IconButton from '../../atoms/Button/IconButton';

import { Back, MoreHorizontal } from '../../atoms/Icons/Icons';

export interface IPageNavigation {
  pageTitle: string;
  pageSubtitle?: string;
  hasBackButton?: boolean;
  hasMoreButton?: boolean;
  onBackButtonClicked?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const SPageNavigation = styled.div`
  position: relative;
  display: flex;
  height: 100px;
  padding: 0 40px;
  text-transform: capitalize;

  & button:last-child {
    margin-left: auto;
  }

  @media (max-width: 900px) {
    height: 80px;
    padding: 0 30px;
  }
`;

// Eventually pass custom onclick functions for the backbutton and more button
const PageNavigation = ({
  pageTitle,
  pageSubtitle,
  hasBackButton,
  hasMoreButton,
  onBackButtonClicked,
}: IPageNavigation) => (
  <SPageNavigation>
    {hasBackButton && (
      <IconButton icon={<Back />} onClick={onBackButtonClicked} />
    )}
    <NavigationTitle title={pageTitle} subTitle={pageSubtitle} />
    {hasMoreButton && <IconButton icon={<MoreHorizontal />} />}
  </SPageNavigation>
);

export default PageNavigation;
