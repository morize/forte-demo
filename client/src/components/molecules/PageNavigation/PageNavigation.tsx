import styled from 'styled-components';

import PageNavigationTitle from '../../atoms/PageNavigationTitle/PageNavigationTitle';
import IconButton from '../../atoms/Button/IconButton';

import { Back, MoreHorizontal } from '../../atoms/Icons/Icons';

export interface IPageNavigation {
  pageTitle: String;
  pageSubtitle?: String;
  hasBackButton?: boolean;
  hasMoreButton?: boolean;
}

const SPageNavigation = styled.div`
  position: relative;
  display: flex;
  height: 48px;

  & button:last-child {
    margin-left: auto;
  }
`;

// Eventually pass custom onclick functions for the backbutton and more button
const PageNavigation = ({
  pageTitle,
  pageSubtitle,
  hasBackButton,
  hasMoreButton,
}: IPageNavigation) => (
  <SPageNavigation>
    {hasBackButton && <IconButton icon={<Back />} />}
    <PageNavigationTitle title={pageTitle} subTitle={pageSubtitle} />
    {hasMoreButton && <IconButton icon={<MoreHorizontal />} />}
  </SPageNavigation>
);

export default PageNavigation;
