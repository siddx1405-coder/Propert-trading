import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased pb-16 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}