import Nav from './components/Nav';
import Hero from './components/Hero';
import TheSystem from './components/TheSystem';
import Services from './components/Services';
import Steps from './components/Steps';
import AboutFounder from './components/AboutFounder';
import FAQ from './components/FAQ';
import CTABand from './components/CTABand';
import Footer from './components/Footer';

const BOOK_URL = 'https://calendar.app.google/x2YHKEPb5wzDa4JY6';

export default function Home() {
  return (
    <>
      <Nav bookUrl={BOOK_URL} />
      <main>
        <Hero bookUrl={BOOK_URL} />
        <TheSystem />
        <Services />
        <Steps />
        <AboutFounder />
        <FAQ />
        <CTABand bookUrl={BOOK_URL} />
      </main>
      <Footer />
    </>
  );
}
