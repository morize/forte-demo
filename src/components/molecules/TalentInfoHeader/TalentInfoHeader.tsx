import styled from 'styled-components';

import { domainRGBValues } from '../../atoms/Talent/Talent';
import { DomainType } from '../../../seeders/TalentenSeeder';

export interface ITalentInfoHeader {
  talentName: string;
  domainName: DomainType;
  placement?: number;
}

const STalentInfoHeader = styled.div<{ domainRGBValues: Array<number> }>`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;

  & div {
    & h2 {
      margin-bottom: 2px;
    }
    & p {
      font-weight: 600;
      color: ${({ domainRGBValues: [red, green, blue] }) =>
        `rgba(${red}, ${green}, ${blue}, 1)`};
    }
  }

  & span {
    font-size: 24px;
  }
`;

const TalentInfoHeader = ({
  talentName,
  domainName,
  placement,
}: ITalentInfoHeader) => (
  <STalentInfoHeader domainRGBValues={domainRGBValues(domainName)}>
    <div>
      <h2>{talentName}</h2>
      <p>{domainName}</p>
    </div>
    {placement && <span>{placement}</span>}
  </STalentInfoHeader>
);

export default TalentInfoHeader;
