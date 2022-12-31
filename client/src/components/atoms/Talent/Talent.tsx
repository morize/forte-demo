import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { TalentDomainsRGB } from '../Colors/Colors';

const STalent = styled.button<{ domainRGBValues: Array<number> }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100px;
  padding: 14px;
  text-transform: capitalize;
  box-sizing: border-box;
  border: none;
  cursor: pointer;

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

export interface ITalent extends ButtonHTMLAttributes<HTMLButtonElement> {
  talent: string;
  domain: string;
  onTalentClicked: (talent: string) => void;
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
      return [0, 0, 0];
  }
};

const Talent = ({
  talent,
  domain,
  placement,
  onTalentClicked,
  ...rest
}: ITalent) => {
  return (
    <STalent
      domainRGBValues={domainRGBValues(domain)}
      onClick={() => onTalentClicked(talent)}
      {...rest}
    >
      {placement && <span>{placement}</span>}
      <p>{talent}</p>
    </STalent>
  );
};

export default Talent;
