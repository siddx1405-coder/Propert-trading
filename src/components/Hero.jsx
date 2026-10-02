import React from 'react';
import { Phone, CheckCircle, Shield, Award, Wrench } from 'lucide-react';
import { clientData } from '../data/clientData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${clientData.phone1.replace(/[^0-9]/g, '')}`;
  const crNumber = clientData.crNo || '178002';

  return (
    <section className="relative bg-slate-950 text-white pt-20 pb-24 px-4 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Column - Headline & Actions */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">
            <Shield size={16} /> Licensed Contracting W.L.L in Doha, Qatar • CR No: {crNumber}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Premium Interior & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              Contracting Solutions
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Delivering top-tier civil works, gypsum partitioning, marble tiling, electrical, and plumbing solutions. Managed by <span className="text-amber-400 font-semibold">{clientData.contactPerson}</span> ({clientData.role}).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition duration-300 flex items-center justify-center gap-2 text-base"
            >
              <Phone size={20} /> Chat on WhatsApp
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 text-white font-medium px-8 py-4 rounded-xl transition duration-300 text-center"
            >
              Explore Our Work
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</p>
              <p className="text-xs text-slate-400 font-medium">Quality Guaranteed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">10+</p>
              <p className="text-xs text-slate-400 font-medium">Core Trades</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">Doha</p>
              <p className="text-xs text-slate-400 font-medium">All Qatar Regions</p>
            </div>
          </div>
        </div>

        {/* Right Column - Highlight Card */}
        <div className="w-full lg:w-96 bg-slate-900/90 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md relative">
          <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 p-2 rounded-full shadow-lg">
            <Award size={24} />
          </div>

          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Wrench className="text-amber-400" size={22} /> Why Partner With Us
          </h3>

          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span><strong>Full Civil & Technical Contracting:</strong> Turnkey solutions for residential & commercial sites.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span><strong>Precision Workmanship:</strong> Master craftsmanship in gypsum, marble, & aluminium fittings.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-amber-400 shrink-0 mt-0.5" size={18} />
              <span><strong>On-Time Delivery:</strong> Direct operational leadership ensuring zero deadline delays.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}