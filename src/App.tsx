import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import OfferPMI from './pages/OfferPMI';

const OfferEntreprises = lazy(() => import('./pages/OfferEntreprises'));
const OfferEntrepreneurs = lazy(() => import('./pages/OfferEntrepreneurs'));
const OfferIA = lazy(() => import('./pages/OfferIA'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<OfferPMI />} />
          <Route path="/entreprises" element={<OfferEntreprises />} />
          <Route path="/entrepreneurs" element={<OfferEntrepreneurs />} />
          <Route path="/ia" element={<OfferIA />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App
