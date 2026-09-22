import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { clientData } from '../data/clientData';

export default function StickyMobileBar() {
  const whatsappUrl = `https://wa.me/${clientData.phone1.replace(/[^0-9]/g, '')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950/95 border-t border-slate-800 p-3 z-50 lg:hidden backdrop-blur-lg">
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href={`tel:${clientData.phone1}`}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm border border-slate-700"
        >
          <Phone size={18} className="text-amber-400" /> Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-amber-400/20"
        >
          <MessageSquare size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}