import React, { useState } from 'react';
import { FileCheck, Shield, AlertOctagon, BrainCircuit, Check, ArrowRight } from 'lucide-react';
import { analyzeBankabilityRisk } from '../services/geminiService';
import { CalculationStatus } from '../types';

const DueDiligence: React.FC = () => {
  const [capacity, setCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [financeType, setFinanceType] = useState('Bancar');
  const [status, setStatus] = useState<CalculationStatus>(CalculationStatus.IDLE);
  const [report, setReport] = useState('');

  const handleCalculate = async () => {
    if (!capacity || !location) return;
    setStatus(CalculationStatus.THINKING);
    try {
      const result = await analyzeBankabilityRisk(capacity, location, financeType);
      setReport(result);
      setStatus(CalculationStatus.COMPLETE);
    } catch (e) {
      setStatus(CalculationStatus.ERROR);
    }
  };

  return (
    <div className="text-smart-blue font-sans bg-[#F8FAFC]">
       {/* Minimalist Hero - Compact */}
       <div className="pt-28 pb-12 px-4 text-center max-w-4xl mx-auto">
         <h1 className="text-4xl md:text-6xl font-bold text-smart-blue mb-4 tracking-tight">
           Due Diligence & <span className="text-gray-300">&</span> <br/> Bancabilitate
         </h1>
         <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
           Evaluare independentă pentru M&A și finanțare. Transformăm incertitudinea tehnică în date pentru decizii investiționale.
         </p>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Services - Tighter Spacing */}
          <div className="lg:col-span-7 space-y-6">
             <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="w-20 h-20 text-smart-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Technical Due Diligence (TDD)</h3>
                <p className="text-gray-500 leading-relaxed font-light mb-5 text-sm">
                   Audit complet înainte de achiziția parcurilor (Ready-to-Build sau Operaționale). Verificăm ATR, Autorizația de Construire, și contractele EPC.
                </p>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-smart-blue" />
                </div>
             </div>

             <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Analiza Riscului (P50/P90)</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                   Validarea independentă a studiilor de productivitate (Yield Assessment) pentru modelul financiar. Identificăm supra-estimările.
                </p>
             </div>
          </div>

          {/* Right Column: Checklist - Compact */}
          <div className="lg:col-span-5 bg-smart-blue text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-xl font-bold mb-6 flex items-center">
                 <FileCheck className="mr-3 text-smart-accent w-5 h-5" />
                 Conformitate PNRR
               </h3>
               <ul className="space-y-4">
                 {[
                   'Principiu DNSH (Do No Significant Harm)',
                   'Maturitatea documentației (ATR)',
                   'Fezabilitatea racordării',
                   'Analiza solului & structura'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start opacity-90 text-sm">
                     <div className="mt-0.5 mr-3 w-4 h-4 rounded-full bg-smart-accent/20 flex items-center justify-center shrink-0">
                       <Check className="w-2.5 h-2.5 text-smart-accent" />
                     </div>
                     <span className="font-light">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        {/* AI Calculator - Clean & Refined */}
        <div className="bg-white rounded-[2.5rem] shadow-glass border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between">
             <div className="flex items-center">
               <div className="w-8 h-8 rounded-lg bg-smart-accent/10 flex items-center justify-center text-smart-accent mr-3">
                 <BrainCircuit className="w-5 h-5" />
               </div>
               <h2 className="text-lg font-bold text-smart-blue">Calculator Risc AI</h2>
             </div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Beta Preview</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
             {/* Input Section */}
             <div className="p-8 border-r border-gray-50">
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Capacitate (MWp)</label>
                    <input 
                      value={capacity} 
                      onChange={(e) => setCapacity(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-smart-blue font-medium focus:outline-none focus:ring-2 focus:ring-smart-blue/20 transition-all" 
                      placeholder="e.g. 5.4"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Locație</label>
                    <input 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-smart-blue font-medium focus:outline-none focus:ring-2 focus:ring-smart-blue/20 transition-all" 
                      placeholder="e.g. Giurgiu"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Finanțare</label>
                    <select 
                      value={financeType} 
                      onChange={(e) => setFinanceType(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-smart-blue font-medium focus:outline-none focus:ring-2 focus:ring-smart-blue/20 transition-all"
                    >
                      <option>Fonduri Proprii</option>
                      <option>Credit Bancar</option>
                      <option>PNRR / Fond Modernizare</option>
                    </select>
                  </div>
                  <button 
                    onClick={handleCalculate}
                    disabled={status === CalculationStatus.THINKING}
                    className="w-full bg-smart-blue text-white font-bold py-3.5 rounded-xl text-sm hover:bg-smart-tech transition-all disabled:opacity-70 mt-2 shadow-md"
                  >
                    {status === CalculationStatus.THINKING ? 'Analiză în curs...' : 'Generează Raport'}
                  </button>
                </div>
             </div>

             {/* Output Section */}
             <div className="lg:col-span-2 p-8 bg-gray-50/30 min-h-[350px]">
                {status === CalculationStatus.IDLE && (
                   <div className="h-full flex flex-col items-center justify-center text-gray-400">
                      <AlertOctagon className="w-10 h-10 mb-3 opacity-20" />
                      <p className="text-xs">Introduceți parametrii pentru analiză.</p>
                   </div>
                )}
                {status === CalculationStatus.THINKING && (
                   <div className="h-full flex flex-col items-center justify-center">
                      <div className="w-10 h-10 border-4 border-smart-blue border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-smart-blue font-bold text-sm">AI gândește...</p>
                   </div>
                )}
                {status === CalculationStatus.COMPLETE && (
                   <div className="prose prose-sm max-w-none text-gray-600">
                      <h3 className="text-base font-bold text-smart-blue mb-3">Raport Preliminar</h3>
                      <div className="whitespace-pre-wrap font-mono text-xs bg-white p-5 rounded-xl border border-gray-200 shadow-sm leading-relaxed">
                        {report}
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DueDiligence;