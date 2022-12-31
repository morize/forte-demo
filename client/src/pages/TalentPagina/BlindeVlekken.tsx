import TalentInfoBox from '../../components/atoms/TalentInfoBox/TalentInfoBox';

const BlindeVlekken = () => (
  <div>
    <h3>Blinde Vlekken</h3>
    <p>
      Daartegenover zijn er vergelijkbare situaties waar mensen met dit talent
      last van hebben. Waarschijnlijk herken je deze punten ook aan jezelf of
      anderen met dit talent.
    </p>
    <TalentInfoBox
      domain="alles"
      info="Omdat u het moeilijk vindt om verzoeken van anderen af te wijzen, legt u zich soms op te veel zaken vast. Probeer uw talenten voor Verantwoordelijkheidsbesef te beheren door iets te beëindigen voordat u een nieuwe taak aanneemt."
    />
    <TalentInfoBox
      domain="alles"
      info="Een te grote hoeveelheid verplichtingen kan ertoe leiden dat u onvoldoende tijd doorbrengt met de belangrijkste mensen in uw leven. Onthoud dat “nee” soms het beste antwoord is om uw relaties gezond te houden."
    />
  </div>
);

export default BlindeVlekken;
