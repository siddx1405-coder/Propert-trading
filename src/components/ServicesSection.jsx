import React from 'react';
import { 
  Zap, 
  Droplet, 
  Grid, 
  Layers, 
  Square, 
  Paintbrush, 
  Home, 
  Shield, 
  Hammer, 
  DoorClosed 
} from 'lucide-react';
import { clientData } from '../data/clientData';

const iconMap = {
  Zap: Zap,
  Droplet: Droplet,
  Grid: Grid,
  Layers: Layers,
  Square: Square,
  Paintbrush: Paintbrush,
  Home: Home,
  Shield: Shield,
  Hammer: Hammer,
  DoorClosed: DoorClosed
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-brand-dark text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gold">Our Services / خدماتنا</h2>
          <p className="text-gray-400 mt-2">Comprehensive interior design, trading, and contracting solutions across Qatar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Home;
            return (
              <div 
                key={index} 
                className="bg-brand-gray p-6 rounded-xl border border-gray-800 hover:border-brand-gold/50 transition group"
              >
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                <p className="text-sm text-brand-gold font-medium dir-rtl text-right">{service.arTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}