import styled from 'styled-components';
import TalentInfoBox from '../../components/atoms/TalentInfoBox/TalentInfoBox';

const STips = styled.div`
  & > div {
    margin-bottom: 24px;
  }
`;

const Tips = () => (
  <STips>
    <div>
      <h3>Hoe bouw je vertrouwen op met deze mensen</h3>
      <TalentInfoBox
        domain="uitvoeren"
        info="Ga eerst naar de bron wanneer dingen verkeerd gaan of er behoefte is aan iets. Stel vragen om de werkelijke gang van zaken en de motieven te achterhalen."
      />
      <TalentInfoBox
        domain="uitvoeren"
        info="Spreek uw zorgen eerlijk uit. Als dat mogelijk en ethisch verantwoord is, geef die persoon dan de kans om de situatie zelf recht te zetten. Anders zult u hem moeten corrigeren."
      />
      <TalentInfoBox
        domain="uitvoeren"
        info="Zorg dat u positieve punten minstens zo vaak signaleert en onterstreept als negatieve. Anderen zullen dit opmerken en weten te respecteren."
      />
    </div>

    <div>
      <h3>Hoe bouw je sterke relaties op met deze mensen?</h3>
      <TalentInfoBox
        domain="relatie bouwen"
        info="Laat uw betrokkenheid regelmatig blijken, vraag hoe het met hen gaat en of ze uw hulp nodig hebben. Toon zo mogelijk iedere dag uw medegevoel en breng warmte in hun leven."
      />
      <TalentInfoBox
        domain="relatie bouwen"
        info="Als u een fout maakt die nadelig is voor iemand anders zoek dan zo snelmogelijk contact en probeer het goed te maken. Bied niet alleen uw verontschuldigingen aan, maar ga een stap verder en herstel uw fout."
      />
      <TalentInfoBox
        domain="relatie bouwen"
        info="Draag er verantwoordelijkheid voor, zodat de ander u gemakkelijker kan vergeven. Zo herstelt u de relatie."
      />
    </div>

    <div>
      <h3>Hoe bied je stabiliteit aan deze mensen?</h3>
      <TalentInfoBox
        domain="strategisch denken"
        info="Laat deze mensen weten dat u hen vertrouw. Geef ze ruimte om keuzes te maken en kijk samen of ze hun verantwoordelijkheden realistisch zijn."
      />
      <TalentInfoBox
        domain="strategisch denken"
        info="Dit zijn mensen die vaker open staan om anderen te dienen en steunen.  Uw hulpvraag wordt voor deze mensen beschouwd als een vorm van erkenning. Let op dat u daar geen misbruik van maakt."
      />
    </div>

    <div>
      <h3>Hoe geef je hoop aan deze mensen?</h3>
      <TalentInfoBox
        domain="beinvloeden"
        info="Laat deze mensen weten dat u hen vertrouw. Geef ze ruimte om keuzes te maken en kijk samen of ze hun verantwoordelijkheden realistisch zijn."
      />
      <TalentInfoBox
        domain="beinvloeden"
        info="Dit zijn mensen die vaker open staan om anderen te dienen en steunen.  Uw hulpvraag wordt voor deze mensen beschouwd als een vorm van erkenning. Let op dat u daar geen misbruik van maakt."
      />
    </div>
  </STips>
);

export default Tips;
