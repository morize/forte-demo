import { useCallback } from 'react';
import styled from 'styled-components';

import Talent from '../../atoms/Talent/Talent';
import { TalentType, DomainType } from '../../../seeders/TalentenSeeder';

export interface ITalentGrid {
  talentItems: TalentType[];
  domain: DomainType;
  talentName?: string;
}

const STalentGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: minmax(50px, 50%) minmax(50px, 50%);
  grid-gap: 12px;
`;

const TalentGrid = ({ talentItems, domain, talentName }: ITalentGrid) => {
  const generateTalentItems = useCallback(
    (item: TalentType) => {
      if (domain === 'alles' || domain === item.domain) {
        return (
          <Talent
            talent={item.talent}
            domain={item.domain}
            placement={item.placement}
            key={item.talent}
          />
        );
      }
    },
    [domain]
  );

  const generateSingleTalent = useCallback(
    (talentName: string) => {
      const result = talentItems.find((item) => item.talent === talentName);

      return result ? (
        <Talent
          talent={result.talent}
          domain={result.domain}
          placement={result.placement}
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
