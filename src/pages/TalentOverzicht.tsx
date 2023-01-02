import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TalentIndicator from '../components/atoms/TalentIndicator/TalentIndicator';
import ExpandingSearchBar from '../components/organisms/ExpandingSearchBar/ExpandingSearchBar';
import SelectButton from '../components/molecules/SelectButton/SelectButton';
import TalentDomainInfo from '../components/atoms/TalentDomainInfo/TalentDomainInfo';
import TalentGrid from '../components/molecules/TalentGrid/TalentGrid';

import {
  domainOptions,
  talentOptions,
  random34Talents,
  DomainOptionType,
  TalentOptionType,
} from '../seeders/TalentenSeeder';

const STalentOptions = styled.div`
  display: flex;
  height: 48px;

  & .select__menu {
    right: 0;
  }
`;

const TalentOverzicht = () => {
  const [isSearchBarOpened, setIsSearchbarOpened] = useState(false);
  const [activeSearchOption, setActiveSearchOption] =
    useState<TalentOptionType>();
  const [activeDomain, setActiveDomain] = useState<DomainOptionType>(
    domainOptions[0]
  );
  const navigate = useNavigate();

  const handleOnSearchButtonClicked = () => {
    setActiveSearchOption(undefined);
    setIsSearchbarOpened(!isSearchBarOpened);
  };

  const handleTalentNavigation = (talentName: string) => {
    navigate(talentName);
  };

  return (
    <>
      <div>
        <h1>Talenten</h1>
        <TalentIndicator
          executingPerc={60}
          influencingPerc={5}
          relBuildingPerc={10}
          stratThinkingPerc={25}
        />
      </div>

      <STalentOptions>
        <ExpandingSearchBar
          isSearchbarOpen={isSearchBarOpened}
          onSearchButtonClicked={handleOnSearchButtonClicked}
          onChange={(option) =>
            setActiveSearchOption(option as DomainOptionType)
          }
          options={talentOptions}
        />
        {!isSearchBarOpened && (
          <SelectButton
            isSearchable={false}
            options={domainOptions}
            value={activeDomain}
            onChange={(option) => setActiveDomain(option as DomainOptionType)}
          />
        )}
      </STalentOptions>

      <TalentDomainInfo domain={activeDomain.value} />

      <TalentGrid
        talentItems={random34Talents}
        selectedDomain={activeDomain.value}
        talentSearchValue={activeSearchOption?.value}
        onTalentItemClicked={handleTalentNavigation}
      />
    </>
  );
};

export default TalentOverzicht;
