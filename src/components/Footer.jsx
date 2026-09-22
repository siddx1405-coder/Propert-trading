import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { clientData } from '../data/clientData';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-gold/30 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-brand-gold mb-3">{clientData.companyName}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Specialized in full-scale interior design, building maintenance, civil contracting, and specialized trades across Doha and all regions in Qatar.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-3">Quick Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-gold" />
              <a href={`tel:${clientData.phone1}`} className="hover:text-brand-gold transition">{clientData.phone1}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-gold" />
              <a href={`tel:${clientData.phone2}`} className="hover:text-brand-gold transition">{clientData.phone2}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-gold" />
              <a href={`mailto:${clientData.email}`} className="hover:text-brand-gold transition">{clientData.email}</a>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} className="text-brand-gold" />
              <span>{clientData.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-3">Operations Management</h4>
          <p className="text-sm text-gray-300 mb-1">
            <strong className="text-brand-gold">{clientData.contactPerson}</strong>
          </p>
          <p className="text-xs text-gray-400 mb-4">{clientData.role}</p>
          <a
            href={`https://wa.me/${clientData.phone1.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brand-gold text-brand-dark font-bold text-xs px-4 py-2 rounded hover:bg-brand-accent transition"
          >
            Direct WhatsApp Inquiry
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {clientData.companyName}. All rights reserved.
      </div>
    </footer>
  );
}