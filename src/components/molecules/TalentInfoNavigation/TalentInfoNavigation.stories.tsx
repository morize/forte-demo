import styled from 'styled-components';

import TalentInfoNavigation from './TalentInfoNavigation';

export default {
  title: 'Molecules',
};

const Container = styled.div`
  width: 800px;
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const TalentInfoNavigationItem = () => (
  <Container>
    <TalentInfoNavigation
      onNavigationItemClicked={(navigationValue) => {
        console.log(navigationValue);
      }}
    />
  </Container>
);

TalentInfoNavigationItem.story = {
  name: 'TalentInfo Navigation',
};
