import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { clientData } from '../data/clientData';

export default function Navbar() {
  return (
    <header className="bg-brand-dark text-white border-b border-brand-gold/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-brand-gold">{clientData.companyName}</h1>
          <p className="text-xs text-gray-400">{clientData.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
          <a href={`tel:${clientData.phone1}`} className="flex items-center gap-2 hover:text-brand-gold transition">
            <Phone size={16} className="text-brand-gold" />
            <span>{clientData.phone1}</span>
          </a>
          <a href={`mailto:${clientData.email}`} className="flex items-center gap-2 hover:text-brand-gold transition">
            <Mail size={16} className="text-brand-gold" />
            <span>{clientData.email}</span>
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={16} className="text-brand-gold" />
            <span>{clientData.location}</span>
          </div>
        </div>
      </div>
    </header>
  );
}