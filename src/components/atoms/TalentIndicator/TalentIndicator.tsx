import styled from 'styled-components';

import { domainRGBValues } from '../Talent/Talent';

const STalentIndicatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42px;
  margin: 12px 0;
  
  @media (max-width: 900px) {
    height: 32px;
  }

  @media (max-width: 380px) {
    height: 24px;
  }
`;

const STalentIndicator = styled.div<{
  percentage: number;
  domainRGBValues: Array<Number>;
}>`
  display: flex;
  min-width: 10%;

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
  <STalentIndicatorContainer>
    <STalentIndicator
      domainRGBValues={domainRGBValues('uitvoeren')}
      percentage={props.executingPerc}
    />
    <STalentIndicator
      domainRGBValues={domainRGBValues('beinvloeden')}
      percentage={props.influencingPerc}
    />
    <STalentIndicator
      domainRGBValues={domainRGBValues('relatie bouwen')}
      percentage={props.relBuildingPerc}
    />
    <STalentIndicator
      domainRGBValues={domainRGBValues('strategisch denken')}
      percentage={props.stratThinkingPerc}
    />
  </STalentIndicatorContainer>
);

export default TalentIndicator;
