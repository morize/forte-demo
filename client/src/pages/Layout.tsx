import { ReactNode } from 'react';
import styled from 'styled-components';

import PageNavigation from '../components/molecules/PageNavigation/PageNavigation';

interface ILayout {
  children: ReactNode;
}

const SLayout = styled.div`
  width: 800px;
  margin: auto;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <PageNavigation pageTitle="Hulpbronnen" hasBackButton hasMoreButton />
      <SLayout>{children}</SLayout>
    </>
  );
};

export default Layout;
