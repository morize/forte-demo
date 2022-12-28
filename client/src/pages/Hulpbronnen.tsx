import TalentIndicator from '../components/atoms/TalentIndicator/TalentIndicator';
import BaseButton from '../components/atoms/Button/BaseButton';

const Hulpbronnen = () => {
  return (
    <div>
      <h1>Hulpbronnen</h1>
      <p>
        Hier kan je tooling vinden voor het meer te weten krijgen over Strengths
        en hoe ze voor je werken.
      </p>

      <h3>Mijn Talenten</h3>
      <p>U zet de toon met Uitvoeren CliftonStrengths-thema's.</p>

      <TalentIndicator
        executingPerc={60}
        influencingPerc={5}
        relBuildingPerc={10}
        stratThinkingPerc={25}
      />

      <p>
        Leiders met dominante kracht in het domein Uitvoeren weten hoe ze dingen
        kunnen laten gebeuren. Als u iemand nodig hebt om een oplossing te
        implementeren, dan zijn dit de mensen die onvermoeibaar werken om het
        voor elkaar te krijgen. Leiders die sterk zijn in uitvoering hebben het
        vermogen om een idee 'op te pakken' en het werkelijkheid te laten
        worden.
      </p>
      <BaseButton label="Bekijk jouw talentenprofiel" />
    </div>
  );
};

export default Hulpbronnen;
