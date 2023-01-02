import styled from 'styled-components';

import { domainRGBValues } from '../Talent/Talent';

const STalentIndicator = styled.div`
  display: flex;
  height: 38px;
  margin: 12px 0;

  @media (max-width: 900px) {
    height: 28px;
  }

  @media (max-width: 380px) {
    height: 24px;
  }
`;

const STalentIndicatorItem = styled.div<{
  percentage: number;
  domainRGBValues: Array<Number>;
}>`
  min-width: 5%;

  ${({ percentage, domainRGBValues: [red, green, blue] }) => `
      background-color: rgba(${red}, ${green}, ${blue}, 1);
      width: ${percentage}%;`}
`;

export interface ITalentIndicator {
  executingPerc: number;
  influencingPerc: number;
  relBuildingPerc: number;
  stratThinkingPerc: number;
}

const TalentIndicator = (props: ITalentIndicator) => (
  <STalentIndicator>
    <STalentIndicatorItem
      domainRGBValues={domainRGBValues('uitvoeren')}
      percentage={props.executingPerc}
    />
    <STalentIndicatorItem
      domainRGBValues={domainRGBValues('beinvloeden')}
      percentage={props.influencingPerc}
    />
    <STalentIndicatorItem
      domainRGBValues={domainRGBValues('relatie bouwen')}
      percentage={props.relBuildingPerc}
    />
    <STalentIndicatorItem
      domainRGBValues={domainRGBValues('strategisch denken')}
      percentage={props.stratThinkingPerc}
    />
  </STalentIndicator>
);

export default TalentIndicator;
