import { useCallback } from 'react';
import styled from 'styled-components';

import { domainDescription, DomainType } from '../../../seeders/TalentenSeeder';

export interface ITalentDomainInfo {
  domain: DomainType;
}

const STalentDomainInfo = styled.div`
  & h3 {
    text-transform: capitalize;
  }
`;

export const getDomainDescription = (domain: DomainType) =>
  domainDescription[domain];

const TalentDomainInfo = ({ domain }: ITalentDomainInfo) => (
  <STalentDomainInfo>
    {domain !== 'alles' ? (
      <>
        <h3>{domain}</h3>
        {getDomainDescription(domain)}
      </>
    ) : (
      <h3>Alle talenten</h3>
    )}
  </STalentDomainInfo>
);

export default TalentDomainInfo;
