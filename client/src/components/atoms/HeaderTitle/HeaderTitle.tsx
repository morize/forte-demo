import styled from 'styled-components';

interface IHeaderTitle {
  title: String;
  subTitle?: String;
}

const SHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  & h3 {
    margin: 4px 0 0 0;
  }
`;

const HeaderTitle = ({ title, subTitle }: IHeaderTitle) => (
  <SHeaderTitle>
    <h2>{title}</h2>
    {subTitle && <h3>{subTitle}</h3>}
  </SHeaderTitle>
);

export default HeaderTitle;
