import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Talent from '../../atoms/Talent/Talent';
import { TalentType, DomainType } from '../../../seeders/TalentenSeeder';

export interface ITalentGrid {
  talentItems: TalentType[];
  domainName: DomainType;
  talentName?: string;
}

const STalentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, 50%) minmax(50px, 50%);
  grid-gap: 12px;
`;

const TalentGrid = ({ talentItems, domainName, talentName }: ITalentGrid) => {
  const navigate = useNavigate();

  const handleTalentNavigation = (talentName: string) => {
    navigate(talentName);
  };

  const generateTalentItems = useCallback(
    (item: TalentType) => {
      if (domainName === 'alles' || domainName === item.domain) {
        return (
          <Talent
            talent={item.talent}
            domain={item.domain}
            placement={item.placement}
            key={item.talent}
            onTalentClicked={handleTalentNavigation}
          />
        );
      }
    },
    [domainName]
  );

  const generateSingleTalent = useCallback(
    (talentName: string) => {
      const result = talentItems.find((item) => item.talent === talentName);

      return result ? (
        <Talent
          talent={result.talent}
          domain={result.domain}
          placement={result.placement}
          onTalentClicked={handleTalentNavigation}
        />
      ) : (
        <p>Niet gevonden</p>
      );
    },
    [talentName]
  );

  return (
    <STalentGrid>
      {talentName
        ? generateSingleTalent(talentName)
        : talentItems.map(generateTalentItems)}
    </STalentGrid>
  );
};

export default TalentGrid;
