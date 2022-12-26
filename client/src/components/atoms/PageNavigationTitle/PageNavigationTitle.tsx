import styled from 'styled-components';

interface IPageNavigationTitle {
  title: String;
  subTitle?: String;
}

const SPageNavigationTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  
  & h3 {
    margin: 4px 0 0 0;
  }
`;

const PageNavigationTitle = ({ title, subTitle }: IPageNavigationTitle) => (
  <SPageNavigationTitle>
    <h2>{title}</h2>
    {subTitle && <h3>{subTitle}</h3>}
  </SPageNavigationTitle>
);

export default PageNavigationTitle;
