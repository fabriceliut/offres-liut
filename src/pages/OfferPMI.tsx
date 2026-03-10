import Header from '../components/Header';
import Hero from '../components/Hero';
import ProofBand from '../components/ProofBand';
import DesignOrg from '../components/DesignOrg';
import Pillars from '../components/Pillars';
import Situations from '../components/Situations';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function OfferPMI() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofBand />
        <DesignOrg />
        <Pillars />
        <Situations />
        <HowWeWork />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
