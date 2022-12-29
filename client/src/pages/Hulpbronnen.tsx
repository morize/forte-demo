import { useNavigate } from 'react-router-dom';

import TalentIndicator from '../components/atoms/TalentIndicator/TalentIndicator';
import BaseButton from '../components/atoms/Button/BaseButton';

const Hulpbronnen = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div>
        <h1>Hulpbronnen</h1>
        <p>
          In deze pagina vind je verdiepend informatie over Strengths en hoe ze
          voor je kunnen werken.
        </p>
      </div>

      <div>
        <h3>Mijn Talenten</h3>
        <p>
          U zet de toon met <span>Uitvoeren</span> CliftonStrengths-thema's.
        </p>

        <TalentIndicator
          executingPerc={60}
          influencingPerc={5}
          relBuildingPerc={10}
          stratThinkingPerc={25}
        />

        <p>
          Leiders met dominante kracht in het domein Uitvoeren weten hoe ze
          dingen kunnen laten gebeuren. Als u iemand nodig hebt om een oplossing
          te implementeren, dan zijn dit de mensen die onvermoeibaar werken om
          het voor elkaar te krijgen. Leiders die sterk zijn in uitvoering
          hebben het vermogen om een idee 'op te pakken' en het werkelijkheid te
          laten worden.
        </p>
      </div>

      <BaseButton
        label="Bekijk jouw talentenprofiel"
        onClick={(e) => {
          e.preventDefault;
          navigate('talenten');
        }}
      />
    </>
  );
};

export default Hulpbronnen;
