import { useState } from 'react';
import styled from 'styled-components';

import IconButton from './components/atoms/Button/IconButton';
import BaseButton from './components/atoms/Button/BaseButton';
import DropdownButton from './components/atoms/Button/DropdownButton';

import HeaderTitle from './components/atoms/HeaderTitle/HeaderTitle';

import Talent from './components/atoms/Talent/Talent';

import TalentIndicator from './components/atoms/TalentIndicator/TalentIndicator';

import { MenuIcon } from './components/atoms/Icons/Icons';

const SButtonContainer = styled.div`
  & button {
    margin-bottom: 24px;
  }
`;

const SHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const STalentsContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 380px;
  grid-gap: 24px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  margin-bottom: 24px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SHeaderContainer>
        <HeaderTitle title="Mijn talenten" subTitle="Beinvloeden" />
      </SHeaderContainer>

      <SButtonContainer>
        <h2>Buttons</h2>
        <IconButton icon={<MenuIcon />} />
        <IconButton icon={<MenuIcon />} label="Menu" />

        <IconButton icon={<MenuIcon />} label="Menu" hasBorder />

        <DropdownButton label="Beinvloeden" />
        <BaseButton label="Bekijk jouw talentenprofiel" />
      </SButtonContainer>

      <STalentsContainer>
        <Talent
          talent="Verantwoordelijkheidsbesef"
          domain="executing"
          placement={1}
        />
        <Talent talent="Hersteldrang" domain="executing" placement={2} />
        <Talent
          talent="Leergierigheid"
          domain="strategic_thinking"
          placement={3}
        />
        <Talent talent="Input" domain="strategic_thinking" placement={4} />
        <Talent talent="Onpartijdheid" domain="executing" placement={5} />
        <Talent talent="Maximalisering" domain="influencing" placement={6} />
      </STalentsContainer>
      
      <div style={{ width: '700px' }}>
        <TalentIndicator
          executingPerc={60}
          influencingPerc={0}
          relBuildingPerc={30}
          stratThinkingPerc={10}
        />
      </div>
    </>
  );
}

export default App;
