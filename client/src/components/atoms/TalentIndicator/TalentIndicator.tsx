import styled from 'styled-components';
import { TalentDomainsRGB } from '../Colors/Colors';

const STalentIndicatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 46px;
`;

const STalentIndicator = styled.div<{
  percentage: number;
  domainRGBValues: Array<Number>;
}>`
  display: flex;
  min-width: 15%;
  height: 46px;

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

const TalentIndicator = (props: ITalentIndicator) => {
  const domainRGBValues = (domain: string) => {
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
    <STalentIndicatorContainer>
      <STalentIndicator
        domainRGBValues={domainRGBValues('executing')}
        percentage={props.executingPerc}
      />
      <STalentIndicator
        domainRGBValues={domainRGBValues('influencing')}
        percentage={props.influencingPerc}
      />
      <STalentIndicator
        domainRGBValues={domainRGBValues('relationship_building')}
        percentage={props.relBuildingPerc}
      />
      <STalentIndicator
        domainRGBValues={domainRGBValues('strategic_thinking')}
        percentage={props.stratThinkingPerc}
      />
    </STalentIndicatorContainer>
  );
};

export default TalentIndicator;
