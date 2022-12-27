import styled from 'styled-components';
import { domainRGBValues, DomainType } from '../../atoms/Talent/Talent';

export interface ITalentInfoHeader {
  talentName: String;
  domainName: String;
  domain: DomainType;
  placement?: number;
}

const STalentInfoHeader = styled.div<{ domainRGBValues: Array<number> }>`
  display: flex;
  justify-content: space-between;

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
  domain,
}: ITalentInfoHeader) => (
  <STalentInfoHeader domainRGBValues={domainRGBValues(domain)}>
    <div>
      <h2>{talentName}</h2>
      <p>{domainName}</p>
    </div>
    {placement && <span>{placement}</span>}
  </STalentInfoHeader>
);

export default TalentInfoHeader;
