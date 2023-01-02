import { useCallback } from 'react';
import styled from 'styled-components';

import Talent from '../../atoms/Talent/Talent';
import { TalentType, DomainType } from '../../../seeders/TalentenSeeder';

export interface ITalentGrid {
  talentItems: TalentType[];
  selectedDomain: DomainType;
  onTalentItemClicked: (talent: string) => void;
  talentSearchValue?: string;
}

const STalentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, 50%) minmax(50px, 50%);
  grid-gap: 12px;
`;

const TalentGrid = ({
  talentItems,
  selectedDomain,
  onTalentItemClicked,
  talentSearchValue,
}: ITalentGrid) => {
  const generateTalentItems = useCallback(
    (item: TalentType) => {
      if (selectedDomain === 'alles' || selectedDomain === item.domain) {
        return (
          <Talent
            talent={item.talent}
            domain={item.domain}
            placement={item.placement}
            key={item.talent}
            onTalentClicked={onTalentItemClicked}
          />
        );
      }
    },
    [selectedDomain]
  );

  const generateSingleTalent = useCallback(
    (talentName: string) => {
      const result = talentItems.find((item) => item.talent === talentName);

      return result ? (
        <Talent
          talent={result.talent}
          domain={result.domain}
          placement={result.placement}
          onTalentClicked={onTalentItemClicked}
        />
      ) : (
        <p>Niet gevonden</p>
      );
    },
    [talentSearchValue]
  );

  return (
    <STalentGrid>
      {talentSearchValue
        ? generateSingleTalent(talentSearchValue)
        : talentItems.map(generateTalentItems)}
    </STalentGrid>
  );
};

export default TalentGrid;
