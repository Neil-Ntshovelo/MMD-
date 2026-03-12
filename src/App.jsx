import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import FirstPage from './components/FirstPage';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Plans from './components/Plans';
import PlanDetails from './components/PlanDetails';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
        <NavBar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/"        element={<FirstPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about"   element={<About />} />
            <Route path="/plans"   element={<Plans />} />
            <Route path="/plans/:id" element={<PlanDetails />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;
