import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Hulpbronnen from '../pages/Hulpbronnen';
import TalentOverzicht from '../pages/TalentOverzicht';

import TalentPaginaLayout from '../pages/TalentPagina/Layout';
import Definitie from '../pages/TalentPagina/Definitie';
import Tips from '../pages/TalentPagina/Tips';
import BlindeVlekken from '../pages/TalentPagina/BlindeVlekken';
import EigenBetekenis from '../pages/TalentPagina/EigenBetekenis';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/hulpbronnen" element={<Hulpbronnen />} />
      <Route path="/hulpbronnen/talenten" element={<TalentOverzicht />} />

      <Route
        path="/hulpbronnen/talenten/:talentNaam"
        element={<TalentPaginaLayout />}
      >
        <Route path="definitie" element={<Definitie />} />
        <Route path="tips" element={<Tips />} />
        <Route path="blinde-vlekken" element={<BlindeVlekken />} />
        <Route path="eigen-betekenis" element={<EigenBetekenis />} />
        <Route path="" element={<Definitie />} />
      </Route>
    </Routes>
  </Layout>
);

export default AppRoutes;
