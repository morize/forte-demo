import { useParams, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import TalentInfoHeader from '../../components/molecules/TalentInfoHeader/TalentInfoHeader';
import TalentInfoNavigation from '../../components/molecules/TalentInfoNavigation/TalentInfoNavigation';
import { random34Talents } from '../../seeders/TalentenSeeder';

const STalentPagina = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;

  & h3 {
    font-weight: 600;
    margin-bottom: 6px;
  }

  & p {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TalentLayout = () => {
  const navigate = useNavigate();
  const { talentNaam } = useParams();

  const selectItem = random34Talents.find((item) => item.talent === talentNaam);

  return (
    <>
      {selectItem && (
        <TalentInfoHeader
          talentName={selectItem.talent}
          domainName={selectItem.domain}
          placement={selectItem.placement}
        />
      )}
      <STalentPagina>
        <Outlet />
      </STalentPagina>

      <TalentInfoNavigation
        onNavigationItemClicked={(redirect) => navigate(redirect)}
      />
    </>
  );
};

export default TalentLayout;
