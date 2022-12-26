import styled from 'styled-components';

import { domainRGBValues, DomainType } from '../Talent/Talent';

export interface ITalentInfo {
  info: String;
  domain: DomainType;
}

const STalentInfo = styled.p<{ domainRGBValues: Array<number> }>`
  display: flex;
  align-items: center;
  padding: 14px;
  
  ${({ domainRGBValues: [red, green, blue] }) =>
    `
      border-left: 3px solid rgba(${red}, ${green}, ${blue}, 1);
      background-color: rgba(${red}, ${green}, ${blue}, 0.18);
    `}
`;

const TalentInfo = ({ info, domain }: ITalentInfo) => {
  return (
    <STalentInfo domainRGBValues={domainRGBValues(domain)}>
      <p>{info}</p>
    </STalentInfo>
  );
};

export default TalentInfo;
