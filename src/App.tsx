import { HashRouter, Routes, Route } from 'react-router-dom';
import OfferPMI from './pages/OfferPMI';
import OfferEntreprises from './pages/OfferEntreprises';
import OfferEntrepreneurs from './pages/OfferEntrepreneurs';
import OfferIA from './pages/OfferIA';

function App() {
  return (
    <HashRouter>
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
