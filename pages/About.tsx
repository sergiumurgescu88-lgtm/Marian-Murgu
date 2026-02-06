import React from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "Ing. Andrei Radu",
      role: "Lead Electrical Design Engineer",
      credentials: "ANRE Gr. IIIA/IIIB",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      focus: "Specialist în proiectare instalații electrice de înaltă tensiune și studii de coexistență pentru parcuri fotovoltaice utility-scale."
    },
    {
      name: "Ing. Elena Stoica",
      role: "Head of Project Management",
      credentials: "PMP Certified, MSc Civil Eng.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      focus: "Coordonează execuția și graficele de lucrări pentru proiecte complexe, asigurând respectarea bugetelor și a standardelor FIDIC."
    },
    {
      name: "Dr. Ing. Mihai Ionescu",
      role: "Senior Energy Auditor",
      credentials: "Auditor Energetic Gr. I",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
      focus: "Expert în eficiență energetică industrială și analiza consumurilor pentru marii consumatori. Consultanță pentru finanțări verzi."
    }
  ];

  return (
    <div className="text-smart-blue font-sans bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="pt-28 pb-16 px-4 text-center bg-white border-b border-gray-100">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 text-smart-blue tracking-tight">
             Din Laborator în <br/><span className="text-smart-accent">Șantier.</span>
           </h1>
           <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
             Nu suntem doar o firmă de inginerie. Suntem un hub de competență tehnică unde cercetarea academică întâlnește pragmatismul investițional.
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              Viziunea Noastră
            </div>
            <h2 className="text-3xl font-bold text-smart-blue mb-6">
              Transformăm viziunea tehnică în <br/> active financiare sigure.
            </h2>
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
              <p className="mb-4">
                În piața energiei regenerabile, diferența dintre un proiect de succes și unul eșuat stă în detalii tehnice invizibile ochiului neformat. 
              </p>
              <p>
                La SMART Renewable Energy, aducem rigoarea științifică în procesul de dezvoltare. Operăm la intersecția dintre ingineria de precizie, diagnoza avansată și cerințele complexe ale finanțării europene.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
               {[
                 "Reducerea LCOE prin optimizare tehnică",
                 "Mitigarea riscurilor prin diagnoză timpurie",
                 "Conformitate totală cu standardele IEC/SR"
               ].map((item, i) => (
                 <div key={i} className="flex items-center">
                   <CheckCircle2 className="w-5 h-5 text-smart-accent mr-3" />
                   <span className="text-gray-700 font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-smart-accent/5 transform rotate-3 rounded-[2rem]"></div>
             <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
              alt="Office Meeting" 
              className="relative rounded-[2rem] shadow-2xl w-full h-full object-cover z-10"
              loading="lazy"
            />
          </div>
        </div>

        {/* Scientific Coordination - FEATURED PROFILE */}
        <div className="mb-24">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-smart-blue mb-3">Coordonare Științifică</h2>
              <p className="text-gray-500">Expertiza care validează tehnologia din spatele investiției.</p>
           </div>

           <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-smart-blue/5 rounded-full blur-[80px] -mr-16 -mt-16"></div>
              
              <div className="flex-shrink-0 relative mx-auto md:mx-0">
                 <div className="relative w-64 md:w-72 aspect-[3/4]">
                    <div className="absolute inset-0 bg-smart-accent rounded-[2rem] transform rotate-2"></div>
                    {/* 
                        FIX: Changed path to absolute root path '/ion-murgescu.jpg'.
                        Added onError handler to fallback to a professional placeholder if local file is missing.
                    */}
                    <img 
                      src="/ion-murgescu.jpg" 
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800";
                        e.currentTarget.onerror = null; // Prevent infinite loop
                      }}
                      alt="Ion Murgescu - PV Laboratory Manager" 
                      className="relative rounded-[2rem] shadow-lg w-full h-full object-cover hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                 </div>
              </div>

              <div className="flex-1 relative z-10 text-center md:text-left">
                 <div className="inline-block px-4 py-1.5 bg-smart-blue text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    PV Laboratory Manager
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold text-smart-blue mb-2">Ion Murgescu</h3>
                 <p className="text-lg text-smart-accent font-medium mb-6">Senior Expert în Metrologie Fotovoltaică</p>
                 
                 <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-8 text-left">
                    <p>
                       Cu o carieră dedicată cercetării avansate, Ion Murgescu aduce la SMART Renewable Energy o expertiză rară în România. 
                       În calitate de <strong>fost Senior Researcher la Institutul Național de Cercetare-Dezvoltare pentru Inginerie Electrică ICPE-CA</strong>, a coordonat studii fundamentale despre comportamentul materialelor fotovoltaice.
                    </p>
                    <p>
                       Expertiza sa transformă diagnoza tehnică dintr-o simplă procedură într-o investigație științifică, capabilă să identifice defecte latente de producție și degradări invizibile în exploatarea standard. Este responsabil de validarea metrologică a tuturor echipamentelor din Performance Lab.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                       <div className="flex items-center mb-2">
                          <BookOpen className="w-5 h-5 text-smart-blue mr-2" />
                          <span className="font-bold text-sm text-smart-blue">Cercetare ICPE-CA</span>
                       </div>
                       <p className="text-xs text-gray-500">Istoric dovedit în institute naționale de prestigiu.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                       <div className="flex items-center mb-2">
                          <Award className="w-5 h-5 text-smart-blue mr-2" />
                          <span className="font-bold text-sm text-smart-blue">Standarde IEC</span>
                       </div>
                       <p className="text-xs text-gray-500">Implementare riguroasă a procedurilor de testare internaționale.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Core Team Grid */}
        <div className="mb-20">
           <h2 className="text-3xl font-bold text-smart-blue mb-10 text-center">Echipa Tehnică</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                 <div key={idx} className="group bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden mb-6 relative">
                       <div className="absolute inset-0 bg-smart-blue/10 group-hover:bg-transparent transition-colors"></div>
                       <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                       />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-smart-blue mb-1">{member.name}</h3>
                       <p className="text-xs font-bold text-smart-accent uppercase tracking-wide mb-3">{member.role}</p>
                       <div className="flex items-center text-xs text-gray-500 font-medium mb-4 bg-gray-50 py-1.5 px-3 rounded-lg w-fit">
                          <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
                          {member.credentials}
                       </div>
                       <p className="text-sm text-gray-500 leading-relaxed font-light">
                          {member.focus}
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Stats / Credentials Bar */}
        <div className="bg-smart-blue rounded-[2rem] p-10 md:p-16 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Competență Validată Instituțional</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { icon: <Users className="w-8 h-8 mb-4 mx-auto text-smart-accent" />, label: "Membri Orizont Europa" },
                 { icon: <Award className="w-8 h-8 mb-4 mx-auto text-smart-accent" />, label: "Autorizați ANRE" },
                 { icon: <TrendingUp className="w-8 h-8 mb-4 mx-auto text-smart-accent" />, label: "Auditori Energetici" },
                 { icon: <BookOpen className="w-8 h-8 mb-4 mx-auto text-smart-accent" />, label: "Certificare ISO 9001" },
               ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                     {stat.icon}
                     <span className="text-sm font-medium opacity-80">{stat.label}</span>
                  </div>
               ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;