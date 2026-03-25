import { HashRouter, Routes, Route } from 'react-router-dom';
import OfferPMI from './pages/OfferPMI';
import OfferEntreprises from './pages/OfferEntreprises';
import OfferEntrepreneurs from './pages/OfferEntrepreneurs';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<OfferPMI />} />
        <Route path="/entreprises" element={<OfferEntreprises />} />
        <Route path="/entrepreneurs" element={<OfferEntrepreneurs />} />
      </Routes>
    </HashRouter>
  );
}

export default App
