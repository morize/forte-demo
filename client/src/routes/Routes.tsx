import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Hulpbronnen from '../pages/Hulpbronnen';
import TalentOverzicht from '../pages/Hulpbronnen/TalentOverzicht';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/hulpbronnen" element={<Hulpbronnen />} />
      <Route path="/hulpbronnen/talenten" element={<TalentOverzicht />} />
    </Routes>
  </Layout>
);
export default AppRoutes;
