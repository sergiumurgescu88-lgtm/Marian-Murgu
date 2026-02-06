import React from 'react';
import { MapPin, Zap, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { 
      name: "Synergy Solar Gruia", 
      capacity: "185.6 MWp", 
      type: "Proiectare SF & Avizare", 
      client: "Fondul de Modernizare",
      location: "Jud. Mehedinți",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=70&w=600",
      description: "Unul dintre cele mai mari proiecte fotovoltaice din România finanțate prin Fondul de Modernizare. Elaborare studiu de fezabilitate complet."
    },
    { 
      name: "Tomis Team Storage", 
      capacity: "100 MWh", 
      type: "Stocare Masivă (BESS)", 
      client: "Tomis Team SA",
      location: "Constanța",
      image: "https://images.unsplash.com/photo-1688589710332-95b2875baf7b?auto=format&fit=crop&q=70&w=600",
      description: "Studiu de fezabilitate pentru o instalație de stocare de mare capacitate (100 MWh). Proiect strategic pentru integrarea în rețea."
    },
    { 
      name: "Campus UPB Solar", 
      capacity: "7.24 MWp", 
      type: "Urban Rooftop", 
      client: "Univ. Politehnica Buc.",
      location: "București",
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&q=70&w=600",
      description: "Cel mai mare proiect de autoconsum universitar din țară. Instalare panouri pe multiple clădiri din campus."
    },
    { 
      name: "ENGIE Storage", 
      capacity: "10 MWh", 
      type: "Stocare (BESS)", 
      client: "ENGIE Romania",
      location: "România",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=70&w=600",
      description: "Studiu de fezabilitate pentru unitate de stocare standalone. Analiză tehnică a ciclurilor de încărcare-descărcare."
    },
    { 
      name: "Greenfiber Industrial", 
      capacity: "1 MWp", 
      type: "Industrial PNRR (C1)", 
      client: "Greenfiber",
      location: "Buzău",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=70&w=600",
      description: "Proiect integrat prin PNRR C1. Instalare centrală fotovoltaică pe hală industrială cu sistem hibrid."
    },
    {
      name: "Sometra Solar",
      capacity: "10 MWp", 
      type: "Parc Fotovoltaic", 
      client: "Sometra",
      location: "Jud. Harghita",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=70&w=600",
      description: "Proiectare tehnică și consultanță pentru reconversie industrială prin energie verde."
    }
  ];

  return (
    <div className="text-smart-blue bg-[#F8FAFC] min-h-screen font-sans">
      <div className="pt-28 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-smart-blue mb-4 tracking-tight">Portofoliu</h1>
        <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
          Studii de caz validate: de la infrastructură critică la parcuri de sute de MW.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={proj.image} 
                  alt={proj.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-smart-blue text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {proj.client}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                     <h3 className="text-lg font-bold text-smart-blue mb-0.5">{proj.name}</h3>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">{proj.type}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Zap className="w-3.5 h-3.5 text-smart-accent mr-1" />
                    <span className="font-bold">{proj.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 mr-1" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow line-clamp-3 font-light">
                  {proj.description}
                </p>

                <div className="pt-4 border-t border-gray-50 flex justify-end">
                  <button className="text-smart-blue text-xs font-bold flex items-center hover:text-smart-accent transition-colors">
                    Detalii <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;