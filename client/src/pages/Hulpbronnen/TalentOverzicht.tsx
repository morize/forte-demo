import { useState } from 'react';
import styled from 'styled-components';

import TalentIndicator from '../../components/atoms/TalentIndicator/TalentIndicator';
import SearchButton from '../../components/molecules/SearchButton/SearchButton';
import SelectButton from '../../components/atoms/Button/SelectButton';
import TalentDomainInfo from '../../components/atoms/TalentDomainInfo/TalentDomainInfo';
import TalentGrid from '../../components/molecules/TalentGrid/TalentGrid';

import {
  domainOptions,
  talentOptions,
  random34Talents,
  DomainOptionType,
  TalentOptionType,
} from '../../seeders/TalentenSeeder';

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

  const handleOnSearchButtonClicked = () => {
    setActiveSearchOption(undefined);
    setIsSearchbarOpened(!isSearchBarOpened);
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
        <SearchButton
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

      <TalentDomainInfo domain={activeDomain.label} />

      <TalentGrid
        talentItems={random34Talents}
        domain={activeDomain.value}
        talentName={activeSearchOption?.value}
      />
    </>
  );
};

export default TalentOverzicht;
