import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageNavigation from '../components/molecules/PageNavigation/PageNavigation';

interface ILayout {
  children: ReactNode;
}

const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: calc(100vh - 100px);
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
    height: calc(100vh - 80px);

    & > div:last-child {
      margin-bottom: 12px;
    }
  }
`;

const Layout = ({ children }: ILayout) => {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split('/').filter((path) => path !== '');
  const pathLength = paths.length;

  const determineHeader = () => {
    switch (pathLength) {
      case 3:
        return {
          title: paths[pathLength - 2],
          subtitle: paths[pathLength - 1],
        };

      case 4:
        return {
          title: paths[pathLength - 3],
          subtitle: paths[pathLength - 2],
        };
      default:
        return {
          title: paths[pathLength - 1],
          subtitle: undefined,
        };
    }
  };

  return (
    <>
      <PageNavigation
        pageTitle={determineHeader().title}
        pageSubtitle={determineHeader().subtitle}
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
