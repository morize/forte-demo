import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { TalentDomainsRGB } from '../Colors/Colors';
import { DomainType } from '../../../seeders/TalentenSeeder';

const STalent = styled.button<{ domainRGBValues: Array<number> }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  padding: 12px 16px;
  border: none;
  text-transform: capitalize;
  cursor: pointer;

  ${({ domainRGBValues: [red, green, blue] }) =>
    `
      border-left: 3px solid rgba(${red}, ${green}, ${blue}, 1);
      background-color: rgba(${red}, ${green}, ${blue}, 0.18);
    `}

  & p {
    padding-bottom: 12px;
    text-align: left;
    word-break: break-word;
    box-sizing: border-box;
  }
`;

export interface ITalent extends ButtonHTMLAttributes<HTMLButtonElement> {
  talent: string;
  domain: DomainType;
  onTalentClicked: (talent: string) => void;
  placement?: number;
}

export const domainRGBValues = (domain: string) =>
  TalentDomainsRGB[domain] || TalentDomainsRGB.default;

const Talent = ({
  talent,
  domain,
  placement,
  onTalentClicked,
  ...buttonProps
}: ITalent) => (
  <STalent
    domainRGBValues={domainRGBValues(domain)}
    onClick={() => onTalentClicked(talent)}
    {...buttonProps}
  >
    {placement && <span>{placement}</span>}
    <p>{talent}</p>
  </STalent>
);

export default Talent;
