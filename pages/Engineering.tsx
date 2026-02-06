import React from 'react';
import { PenTool, Battery, Lightbulb } from 'lucide-react';

const Engineering: React.FC = () => {
  return (
    <div className="text-smart-blue font-sans bg-[#F8FAFC]">
      <div className="pt-28 pb-16 px-4">
         <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-smart-blue overflow-hidden relative min-h-[350px] flex items-center justify-center shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=60&w=1200" 
              alt="Blueprints" 
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-smart-blue/90 via-smart-blue/60 to-smart-blue/90"></div>
            <div className="relative z-10 text-center px-4">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Inginerie</h1>
               <p className="text-gray-200 text-lg md:text-xl font-light tracking-wide">Lifecycle Proiect: De la concept la operare.</p>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <PenTool className="w-8 h-8" />,
              title: "Proiectare & Avizare",
              desc: "Elaborăm documentații complete pentru toate fazele (SF, DTAC, PT, DDE).",
              items: ["Studiu de Fezabilitate", "Documentație Tehnică", "Proiect Tehnic"]
            },
            {
              icon: <Battery className="w-8 h-8" />,
              title: "Stocare (BESS)",
              desc: "Dimensionare și integrare pentru sisteme de stocare la scară largă (10-100 MWh).",
              items: ["Analiză cost-beneficiu", "Servicii de sistem", "Integrare hibridă"]
            },
            {
              icon: <Lightbulb className="w-8 h-8" />,
              title: "Audit Energetic",
              desc: "Servicii acreditate pentru marii consumatori industriali și clădiri.",
              items: ["Audit tip A și B", "Plan eficiență", "Finanțări verzi"]
            }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-soft hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-smart-blue group-hover:bg-smart-blue group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold mb-3 text-smart-blue">{card.title}</h2>
              <p className="text-gray-500 mb-6 leading-relaxed font-light text-sm min-h-[60px]">{card.desc}</p>
              <div className="space-y-2.5 pt-5 border-t border-gray-50">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-smart-accent mr-2.5"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engineering;