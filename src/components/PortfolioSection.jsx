import React, { useState } from 'react';

const mediaItems = [
  { type: 'video', category: 'interior', src: '/vid1.mp4', title: 'Decorative Wall Molding & Painting', desc: 'Precision plaster framing, arch detailing, and fine wall painting.' },
  { type: 'image', category: 'drywall', src: '/img4.jpg', title: 'Drywall Taping & Wall Prep', desc: 'Seamless drywall joint mudding and preparation for interior painting.' },
  { type: 'image', category: 'drywall', src: '/img5.jpg', title: 'Partitioning & Drop Ceiling Scaffolding', desc: 'Structural interior framing and ceiling installations.' },
  { type: 'image', category: 'flooring', src: '/img6.jpg', title: 'Luxury Hall & Marble Flooring', desc: 'Polished tile flooring, recessed LED ceiling lighting, and trim molding.' },
  { type: 'image', category: 'flooring', src: '/img7.jpg', title: 'Bathroom Sanitary & Tile Fitting', desc: 'Full bathroom renovation, marble pattern tiling, and modern fixtures.' },
  { type: 'image', category: 'glass', src: '/img8.jpg', title: 'Aluminum Glass Partitions', desc: 'Black metal-framed folding glass doors and office/room partitioning.' },
  { type: 'image', category: 'glass', src: '/img9.jpg', title: 'UPVC Window & Door Fitting', desc: 'Weatherproof UPVC glass door with reflective tint installation.' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'interior', label: 'Wall & Gypsum' },
  { id: 'flooring', label: 'Marble & Tiles' },
  { id: 'glass', label: 'Aluminium & UPVC' },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-slate-950 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">Verified Work</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">Our Project Gallery</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Examine our high-end finishings across Doha and greater Qatar.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition duration-200 ${
                activeTab === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition duration-300 shadow-xl flex flex-col group"
            >
              <div className="h-64 w-full bg-black relative overflow-hidden">
                {item.type === 'video' ? (
                  <video controls className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}