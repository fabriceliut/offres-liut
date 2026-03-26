import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import OfferPMI from './pages/OfferPMI';
import OfferEntreprises from './pages/OfferEntreprises';
import OfferEntrepreneurs from './pages/OfferEntrepreneurs';
import OfferIA from './pages/OfferIA';

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
      <Routes>
        <Route path="/" element={<OfferPMI />} />
        <Route path="/entreprises" element={<OfferEntreprises />} />
        <Route path="/entrepreneurs" element={<OfferEntrepreneurs />} />
        <Route path="/ia" element={<OfferIA />} />
      </Routes>
    </HashRouter>
  );
}

export default App
