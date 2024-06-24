import React from 'react';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './sections/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Disclaimer from './sections/Disclaimer';
import PrivacyPolicy from './sections/PrivacyPolicy';
import ReturnRefundsPolicy from './sections/RefundAndReturn';
import TermsAndConditions from './sections/TermAndConditions';
import FAQ from './sections/FAQs';
import Products from './pages/products/Products';
import KeyboardProductList from './pages/products/Keyboard';
import MouseProductList from './pages/products/Mouse';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/keyboards" element={<KeyboardProductList />} />
          <Route path="/mouse" element={<MouseProductList />} />

          {/* ................... footer section .........................s */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/refund&return" element={<ReturnRefundsPolicy />} />
          <Route path="/t&c" element={<TermsAndConditions />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
