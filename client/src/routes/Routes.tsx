import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Hulpbronnen from '../pages/Hulpbronnen';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/hulpbronnen" element={<Hulpbronnen />} />
    </Routes>
  </Layout>
);
export default AppRoutes;
