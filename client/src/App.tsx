import { useState } from "react";
import styled from "styled-components";

import IconButton from "./components/atoms/Button/IconButton";
import BaseButton from "./components/atoms/Button/BaseButton";
import DropdownButton from "./components/atoms/Button/DropdownButton";

import HeaderTitle from "./components/atoms/HeaderTitle/HeaderTitle";

import { MenuIcon } from "./components/atoms/Icons/Icons";

const SButtonContainer = styled.div`
  & button {
    margin-bottom: 24px;
  }
`;

const SHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
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
    </>
  );
}

export default App;
