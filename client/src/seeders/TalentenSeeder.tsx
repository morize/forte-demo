export type DomainType =
  | 'alles'
  | 'uitvoeren'
  | 'beinvloeden'
  | 'relatie bouwen'
  | 'strategisch denken';
export type DomainOptionType = { label: string; value: DomainType };
export type TalentOptionType = { label: string; value: string };
export type TalentType = {
  talent: string;
  domain: DomainType;
  placement: number;
};

export const domainOptions: DomainOptionType[] = [
  { label: 'Alles', value: 'alles' },
  { label: 'Uitvoeren', value: 'uitvoeren' },
  { label: 'Beinvloeden', value: 'beinvloeden' },
  { label: 'Relatie Bouwen', value: 'relatie bouwen' },
  { label: 'Strategisch Denken', value: 'strategisch denken' },
];

export const talentOptions: TalentOptionType[] = [
  { label: 'Hersteldrang', value: 'hersteldrang' },
  { label: 'Leergierigheid', value: 'leergierigheid' },
  { label: 'Onpartijdheid', value: 'onpartijdheid' },
  { label: 'Analytisch', value: 'analytisch' },
  { label: 'Verantwoordelijkheidsbesef', value: 'verantwoordelijkheidsbesef' },
  { label: 'Harmonie', value: 'harmonie' },
  { label: 'Behoedzaamheid', value: 'behoedzaamheid' },
  { label: 'Focus', value: 'focus' },
  { label: 'Aanpassingsvermogen', value: 'aanpassingsvermogen' },
  { label: 'Input', value: 'input' },
  { label: 'Ideeenvorming', value: 'ideeenvorming' },
  { label: 'Empathie', value: 'empathie' },
  { label: 'Strategisch', value: 'strategisch' },
  { label: 'Organisatievermogen', value: 'organisatievermogen' },
  { label: 'Significantie', value: 'significantie' },
  { label: 'Intellect', value: 'intellect' },
  { label: 'Zelfverzekerheid', value: 'zelfverzekerheid' },
  { label: 'Toekomstgerichtheid', value: 'toekomstgerichtheid' },
  { label: 'Relatievorming', value: 'relatievorming' },
  { label: 'Discipline', value: 'discipline' },
  { label: 'Individualisering', value: 'individualisering' },
  { label: 'Prestatiegerichtheid', value: 'prestatiegerichtheid' },
  { label: 'Aanmoediging', value: 'aanmoediging' },
  { label: 'Saamhorigheid', value: 'saamhorigheid' },
  { label: 'Overtuiging', value: 'overtuiging' },
  { label: 'Contextueel', value: 'contextueel' },
  { label: 'Sturingskracht', value: 'sturingskracht' },
  { label: 'Competitie', value: 'competitie' },
  { label: 'Verbondenheid', value: 'verbondenheid' },
  { label: 'Positivisme', value: 'positivisme' },
  { label: 'Woo', value: 'woo' },
  { label: 'Actiegerichtheid', value: 'actiegerichtheid' },
  { label: 'Maximalisering', value: 'maximalisering' },
  { label: 'Communicatie', value: 'communicatie' },
];

export const random34Talents: TalentType[] = [
  { talent: 'hersteldrang', domain: 'uitvoeren', placement: 1 },
  { talent: 'leergierigheid', domain: 'strategisch denken', placement: 2 },
  { talent: 'onpartijdheid', domain: 'uitvoeren', placement: 3 },
  { talent: 'analytisch', domain: 'strategisch denken', placement: 4 },
  { talent: 'verantwoordelijkheidsbesef', domain: 'uitvoeren', placement: 5 },
  { talent: 'harmonie', domain: 'relatie bouwen', placement: 6 },
  { talent: 'behoedzaamheid', domain: 'uitvoeren', placement: 7 },
  { talent: 'focus', domain: 'uitvoeren', placement: 8 },
  { talent: 'aanpassingsvermogen', domain: 'relatie bouwen', placement: 9 },
  { talent: 'input', domain: 'strategisch denken', placement: 10 },
  { talent: 'ideeenvorming', domain: 'strategisch denken', placement: 11 },
  { talent: 'empathie', domain: 'relatie bouwen', placement: 12 },
  { talent: 'strategisch', domain: 'strategisch denken', placement: 13 },
  { talent: 'organisatievermogen', domain: 'uitvoeren', placement: 14 },
  { talent: 'significantie', domain: 'beinvloeden', placement: 15 },
  { talent: 'intellect', domain: 'strategisch denken', placement: 16 },
  { talent: 'zelfverzekerheid', domain: 'beinvloeden', placement: 17 },
  {
    talent: 'toekomstgerichtheid',
    domain: 'strategisch denken',
    placement: 18,
  },
  { talent: 'relatievorming', domain: 'relatie bouwen', placement: 19 },
  { talent: 'discipline', domain: 'uitvoeren', placement: 20 },
  { talent: 'individualisering', domain: 'relatie bouwen', placement: 21 },
  { talent: 'prestatiegerichtheid', domain: 'uitvoeren', placement: 22 },
  { talent: 'aanmoediging', domain: 'relatie bouwen', placement: 23 },
  { talent: 'saamhorigheid', domain: 'relatie bouwen', placement: 24 },
  { talent: 'overtuiging', domain: 'uitvoeren', placement: 25 },
  { talent: 'contextueel', domain: 'strategisch denken', placement: 26 },
  { talent: 'sturingskracht', domain: 'beinvloeden', placement: 27 },
  { talent: 'competitie', domain: 'beinvloeden', placement: 28 },
  { talent: 'verbondenheid', domain: 'relatie bouwen', placement: 29 },
  { talent: 'positivisme', domain: 'relatie bouwen', placement: 30 },
  { talent: 'woo', domain: 'beinvloeden', placement: 31 },
  { talent: 'actiegerichtheid', domain: 'beinvloeden', placement: 32 },
  { talent: 'maximalisering', domain: 'beinvloeden', placement: 33 },
  { talent: 'communicatie', domain: 'beinvloeden', placement: 34 },
];

export const domainDescription = [
  {
    domain: 'Uitvoeren',
    description: 'Uitvoeren thema’s helpen u zaken klaar te krijgen',
  },
  {
    domain: 'Beinvloeden',
    description:
      'Beinvloeden thema’s helpen u de leiding te nemen, u uit te spreken en ervoor te zorgen dat er naar anderen wordt geluisterd.',
  },
  {
    domain: 'Relatie Bouwen',
    description:
      'Relatie bouwen thema’s helpen u sterke relaties op te bouwen die een team bijeenhouden.',
  },
  {
    domain: 'Strategisch Denken',
    description:
      'Strategisch Denken thema’s helpen u de informatie te absorberen en analyseren waaraan betere beslissingen ten grondslag liggen.',
  },
];
