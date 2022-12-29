import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageNavigation from '../components/molecules/PageNavigation/PageNavigation';

interface ILayout {
  children: ReactNode;
}

const SLayout = styled.div`
  width: 800px;
  margin: auto;

  & > div {
    margin-bottom: 20px;

    & > h3,
    & > h1 {
      font-weight: 600;
      margin-bottom: 4px;
    }
  }

  & > button {
    width: 100%;
  }

  & span {
    font-weight: 600;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const Layout = ({ children }: ILayout) => {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split('/').filter((path) => path !== '');
  const pathLength = paths.length;
  
  return (
    <>
      <PageNavigation
        pageTitle={paths[pathLength - 1]}
        hasBackButton={pathLength > 1}
        onBackButtonClicked={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      />
      <SLayout>{children}</SLayout>
    </>
  );
};

export default Layout;
