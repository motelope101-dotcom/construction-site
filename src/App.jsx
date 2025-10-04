import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

