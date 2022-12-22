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
    font-size: 24px;
  }

  & p {
    padding: 6px 0;
    word-wrap: break-word;
    font-size: 14px;
    margin: 0;
    box-sizing: border-box;
  }
`;

export interface ITalent {
  talent: String;
  domain:
    | 'executing'
    | 'influencing'
    | 'relationship_building'
    | 'strategic_thinking';
  placement?: number;
}

const Talent = ({ talent, domain, placement }: ITalent) => {
  const domainRGBValues = () => {
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

  return (
    <STalentContainer domainRGBValues={domainRGBValues()}>
      {placement && <span>{placement}</span>}
      <p>{talent}</p>
    </STalentContainer>
  );
};

export default Talent;
