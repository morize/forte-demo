import styled from 'styled-components';

export interface INavigationTitle {
  title: string;
  subTitle?: string;
}

const SNavigationTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  & h3 {
    margin-top: 4px;
    font-weight: 400;
  }
`;

const NavigationTitle = ({ title, subTitle }: INavigationTitle) => (
  <SNavigationTitle>
    <h2>{title}</h2>
    {subTitle && <h3>{subTitle}</h3>}
  </SNavigationTitle>
);

export default NavigationTitle;
