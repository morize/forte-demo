import styled from 'styled-components';

import { TalentDomainsRGB } from '../Colors/Colors';

const STalentContainer = styled.div<{ domainRGBValues: Array<number> }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 168px;
  height: 100px;
  padding: 14px;
  box-sizing: border-box;

  ${({ domainRGBValues: [red, green, blue] }) =>
    `
      border-left: 3px solid rgba(${red}, ${green}, ${blue}, 1);
      background-color: rgba(${red}, ${green}, ${blue}, 0.18);
    `}

  & span {
    font-size: 20px;
  }

  & p {
    padding: 0 0 12px 0;
    word-wrap: break-word;
    font-size: 12px;
    margin: 0;
    box-sizing: border-box;
  }
`;

export type DomainType =
  | 'executing'
  | 'influencing'
  | 'relationship_building'
  | 'strategic_thinking';

export interface ITalent {
  talent: String;
  domain: DomainType;
  placement?: number;
}

export const domainRGBValues = (domain: String) => {
  switch (domain) {
    case 'executing':
      return TalentDomainsRGB.executing;
    case 'influencing':
      return TalentDomainsRGB.influencing;
    case 'relationship_building':
      return TalentDomainsRGB.relationshipBuilding;
    case 'strategic_thinking':
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
