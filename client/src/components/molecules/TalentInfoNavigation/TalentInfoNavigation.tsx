import styled from 'styled-components';

import IconButton from '../../atoms/Button/IconButton';
import { Info, LightBulb, Warning, User } from '../../atoms/Icons/Icons';

export interface ITalentInfoNavigation {
  onNavigationItemClicked: (redirectTo: String) => void;
}

const STalentInfoNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
  padding: 10px 0;

  & button {
    width: 90px;
    min-height: 100%;
    padding: 0 6px;
    box-sizing: border-box;
  }

  @media (max-width: 500px) {
    height: 80px;
  }

  @media (max-width: 380px) {
    height: 70px;
  }
`;

const TalentInfoNavigation = ({
  onNavigationItemClicked,
}: ITalentInfoNavigation) => (
  <STalentInfoNavigation>
    <IconButton
      icon={<Info />}
      label="Definitie"
      onClick={() => onNavigationItemClicked('definitie')}
    />

    <IconButton
      icon={<LightBulb />}
      label="Tips"
      onClick={() => onNavigationItemClicked('tips')}
    />

    <IconButton
      icon={<Warning />}
      label="Blinde vlekken"
      onClick={() => onNavigationItemClicked('blinde-vlekken')}
    />

    <IconButton
      icon={<User />}
      label="Eigen Betekenis"
      onClick={() => onNavigationItemClicked('eigen-betekenis')}
    />
  </STalentInfoNavigation>
);

export default TalentInfoNavigation;
