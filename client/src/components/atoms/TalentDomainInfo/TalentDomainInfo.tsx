import { useCallback } from 'react';

import { domainDescription } from '../../../seeders/TalentenSeeder';

export interface ITalentDomainInfo {
  domain: string;
}

const TalentDomainInfo = ({ domain }: ITalentDomainInfo) => {
  const generateDomainDescription = useCallback(
    (domain: string) => {
      const domainResult = domainDescription.find(
        (item) => item.domain === domain
      );

      return <p>{domainResult?.description} </p>;
    },
    [domain]
  );

  return (
    <div>
      {domain !== 'Alles' ? (
        <>
          <h3>{domain}</h3>
          {generateDomainDescription(domain)}
        </>
      ) : (
        <h3>Alle talenten</h3>
      )}
    </div>
  );
};

export default TalentDomainInfo;
