import styled from 'styled-components';

import { TalentDomainsRGB } from '../Colors/Colors';

const STalentContainer = styled.div<{ domainRGBValues: Array<number> }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100px;
  padding: 14px;
  text-transform: capitalize;
  box-sizing: border-box;
  
  ${({ domainRGBValues: [red, green, blue] }) =>
    `
      border-left: 3px solid rgba(${red}, ${green}, ${blue}, 1);
      background-color: rgba(${red}, ${green}, ${blue}, 0.18);
    `}

  & p {
    padding: 0 0 12px 0;
    word-wrap: break-word;
    margin: 0;
    box-sizing: border-box;
  }
`;

export interface ITalent {
  talent: string;
  domain: string;
  placement?: number;
}

export const domainRGBValues = (domain: String) => {
  switch (domain) {
    case 'uitvoeren':
      return TalentDomainsRGB.executing;
    case 'beinvloeden':
      return TalentDomainsRGB.influencing;
    case 'relatie bouwen':
      return TalentDomainsRGB.relationshipBuilding;
    case 'strategisch denken':
      return TalentDomainsRGB.strategicThinking;
    default:
      return [255, 0, 0];
  }
};

const Talent = ({ talent, domain, placement }: ITalent) => {
  return (
    <STalentContainer domainRGBValues={domainRGBValues(domain)}>
      {placement && <span>{placement}</span>}
      <p>{talent}</p>
    </STalentContainer>
  );
};

export default Talent;
