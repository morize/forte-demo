import { useState } from "react";
import styled from "styled-components";

import IconButton from "./components/atoms/Button/IconButton";
import BaseButton from "./components/atoms/Button/BaseButton";
import DropdownButton from "./components/atoms/Button/DropdownButton";

import { MenuIcon } from "./components/atoms/Icons/Icons";

const SButtonContainer = styled.div`
  & button {
    margin-bottom: 24px;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <SButtonContainer>
      <p>Buttons</p>
      <IconButton icon={<MenuIcon />} />
      <IconButton icon={<MenuIcon />} label="Menu"  />

      <IconButton icon={<MenuIcon />} label="Menu" hasBorder />

      <DropdownButton label="Beinvloeden" />
      <BaseButton label="Bekijk jouw talentenprofiel" />
    </SButtonContainer>
  );
}

export default App;
