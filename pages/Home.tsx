import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Cpu, Microscope } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-smart-blue font-sans overflow-x-hidden">
      {/* SEO Metadata */}
      <div className="hidden">
        <h1>Inginerie de Precizie și Diagnoză Avansată pentru Proiecte Energetice Bancabile</h1>
        <meta name="description" content="SMART Renewable Energy: Minimizăm riscul tehnic și financiar în proiecte fotovoltaice și eoliene." />
      </div>

      {/* Elegant Hero Section - More Compact */}
      <section className="relative min-h-[85vh] flex items-center pt-20">
        {/* Realistic Background */}
        <div className="absolute inset-0 bg-smart-blue overflow-hidden">
          {/* Ambient Lighting Effects */}
          <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-900/30 rounded-full blur-[100px] animate-pulse z-0"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-smart-accent/10 rounded-full blur-[80px] z-0"></div>
          
          {/* Ultra Realistic Background Image - Optimized */}
          <img 
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=60&w=1600&auto=format&fit=crop" 
            alt="Solar Farm with Clouds" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            // @ts-ignore
            fetchpriority="high"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-smart-blue/90 via-smart-blue/70 to-smart-blue z-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-8 backdrop-blur-md animate-fade-in-up shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-smart-accent mr-2.5 animate-pulse"></span>
            Partener Tehnic pentru Investitori Instituționali
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up delay-100 drop-shadow-2xl">
            Inginerie de <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400">Precizie.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200 drop-shadow-md">
            Transformăm incertitudinea în active bancabile prin diagnoză avansată și proiectare conform standardelor IEC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link to="/due-diligence" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-full text-smart-blue bg-white hover:bg-gray-50 transition-all shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] hover:scale-105">
              Solicită Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/proiecte" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold rounded-full text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm shadow-sm">
              Vezi Portofoliu
            </Link>
          </div>
        </div>
      </section>

      {/* Refined Stats Section */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-gray-100">
            {[
              { val: "6+", label: "Ani Experiență" },
              { val: "185", label: "MWp Proiectați" },
              { val: "UE", label: "Horizon Europe" },
              { val: "100%", label: "Capital Românesc" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-3xl md:text-4xl font-bold text-smart-blue mb-1 tracking-tight group-hover:scale-110 transition-transform duration-300 origin-center">{stat.val}</p>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Clean Cards */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-smart-blue tracking-tight mb-4">Expertiză Validată</h2>
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                O abordare științifică a energiei regenerabile, combinând cercetarea academică cu pragmatismul de șantier.
              </p>
            </div>
            <div className="hidden md:block w-20 h-[1px] bg-smart-blue/20 mb-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="h-6 w-6 text-smart-blue" />,
                title: "Securitate Financiară",
                desc: "Documentații (SF, PT, DDE) elaborate riguros pentru a trece filtrele băncilor și ale organismelor de finanțare (PNRR)."
              },
              {
                icon: <Microscope className="h-6 w-6 text-smart-accent" />,
                title: "Diagnosticare Profundă",
                desc: "Utilizăm Electroluminescență (EL) și Termografie IR pentru a identifica microfisuri invizibile. Protejăm LCOE-ul pe 20 de ani."
              },
              {
                icon: <Cpu className="h-6 w-6 text-blue-600" />,
                title: "Inovare & Digitalizare",
                desc: "Aducem tehnologii 'de mâine' (Digital Twins, BESS optimization) în proiectele comerciale de azi prin parteneriate europene."
              }
            ].map((card, idx) => (
              <div key={idx} className="group p-8 rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-white group-hover:shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-smart-blue">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works - Refined Bento Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-smart-blue tracking-tight">Servicii Cheie</h2>
            <Link to="/contact" className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-smart-blue hover:text-smart-accent transition-colors">
              Discută cu un inginer <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[500px]">
             {/* Large Left Card */}
             <Link to="/inginerie" className="relative rounded-[1.5rem] overflow-hidden group shadow-md hover:shadow-xl transition-all h-[350px] lg:h-full block">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=70&w=800" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Engineering"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smart-blue/90 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-smart-accent font-bold text-[10px] uppercase tracking-widest mb-2 block">Core Business</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Inginerie & Proiectare</h3>
                      <p className="text-gray-300 font-light text-base">SF, PT, DDE pentru parcuri fotovoltaice și eoliene.</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white group-hover:bg-white group-hover:text-smart-blue transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
             </Link>

             {/* Right Column Grid */}
             <div className="grid grid-rows-2 gap-6 h-full">
                <Link to="/diagnostic" className="relative rounded-[1.5rem] overflow-hidden group shadow-md hover:shadow-xl transition-all block h-[250px] lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=70&w=600" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Lab"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-smart-blue/60 group-hover:bg-smart-blue/50 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                     <h3 className="text-xl font-bold text-white mb-1">Diagnostic & Lab</h3>
                     <p className="text-gray-300 text-sm font-light">Testare EL on-site, I-V Curve, inspecții IR.</p>
                  </div>
                </Link>
                <Link to="/due-diligence" className="relative rounded-[1.5rem] overflow-hidden group shadow-md hover:shadow-xl transition-all block h-[250px] lg:h-auto">
                   <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=70&w=600" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Documents"
                    loading="lazy"
                   />
                   <div className="absolute inset-0 bg-smart-blue/60 group-hover:bg-smart-blue/50 transition-colors"></div>
                   <div className="absolute bottom-0 left-0 p-6">
                     <h3 className="text-xl font-bold text-white mb-1">Due Diligence</h3>
                     <p className="text-gray-300 text-sm font-light">Audit tehnic independent (TDD) pentru bănci.</p>
                  </div>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimalist */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-smart-blue mb-6 tracking-tight">Pregătit pentru un proiect bancabil?</h2>
          <p className="text-lg text-gray-500 mb-10 font-light max-w-xl mx-auto">
            Nu lăsa riscurile tehnice să afecteze randamentul investiției. Validăm fiecare detaliu.
          </p>
          <Link to="/contact" className="inline-block bg-smart-blue text-white font-bold text-sm px-10 py-4 rounded-full hover:bg-smart-tech transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Contactați Echipa Tehnică
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;