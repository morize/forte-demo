import styled from 'styled-components';

import { domainRGBValues } from '../Talent/Talent';
import { DomainType } from '../../../seeders/TalentenSeeder';

export interface ITalentInfoBox {
  info: string;
  domain: DomainType;
}

const STalentInfoBox = styled.p<{ domainRGBValues: Array<number> }>`
  display: flex;
  align-items: center;
  padding: 14px;
  font-weight: 400;

  ${({ domainRGBValues: [red, green, blue] }) =>
    `
      border-left: 3px solid rgba(${red}, ${green}, ${blue}, 1);
      background-color: rgba(${red}, ${green}, ${blue}, 0.18);
    `}
`;

const TalentInfoBox = ({ info, domain }: ITalentInfoBox) => (
  <STalentInfoBox domainRGBValues={domainRGBValues(domain)}>
    {info}
  </STalentInfoBox>
);

export default TalentInfoBox;
