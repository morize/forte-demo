import TalentGridComp from './TalentGrid';
import styled from 'styled-components';

import { random34Talents } from '../../../seeders/TalentenSeeder';

export default {
  title: 'Molecules',
};

const Container = styled.div`
  width: 800px;
  margin: auto;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const TalentGrid = () => (
  <Container>
    <TalentGridComp
      onTalentItemClicked={(talent) => console.log(talent)}
      talentItems={random34Talents}
      selectedDomain="alles"
    />
  </Container>
);

TalentGrid.story = {
  name: 'Talent Grid',
};
