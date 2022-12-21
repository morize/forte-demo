import styled from "styled-components";

interface IHeaderTitle {
  title: String;
  subTitle?: String;
}

const SHeaderTitleContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SHeaderTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const SHeaderSubTitle = styled.h3`
  margin: 12px 0 0 0;
  font-size: 18px;
  font-weight: 400;
`;

const HeaderTitle = ({ title, subTitle }: IHeaderTitle) => (
    <SHeaderTitleContainer>
      <SHeaderTitle>{title}</SHeaderTitle>
      {subTitle && <SHeaderSubTitle>{subTitle}</SHeaderSubTitle>}
    </SHeaderTitleContainer>
);

export default HeaderTitle;
