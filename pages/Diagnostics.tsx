import React, { useState } from 'react';
import { Activity, Camera, TrendingUp, UploadCloud, CheckCircle2 } from 'lucide-react';
import { analyzeELImage } from '../services/geminiService';

const Diagnostics: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult('');
      };
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    if (!selectedImage) return;
    setIsAnalyzing(true);
    const base64Data = selectedImage.split(',')[1];
    try {
      const result = await analyzeELImage(base64Data);
      setAnalysisResult(result);
    } catch (error) {
      setAnalysisResult("Eroare la analiza imaginii.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="text-smart-blue font-sans bg-[#F8FAFC]">
       {/* Hero - Compact & Clean */}
      <div className="relative pt-28 pb-16 px-4 md:px-8 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
               <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-5">
                 Performance Lab
               </div>
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-smart-blue">
                 Diagnostic & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Validare Tehnică.</span>
               </h1>
               <p className="text-lg text-gray-500 font-light leading-relaxed max-w-lg">
                  Reducerea pierderilor de producție prin detectarea timpurie a degradării. Utilizăm standardul internațional IEC 62446-1.
               </p>
            </div>
            <div className="md:w-1/2 relative flex justify-end">
               <img 
                 src="https://images.unsplash.com/photo-1581093588401-fbb073d74888?auto=format&fit=crop&q=75&w=800" 
                 alt="Lab Equipment"
                 className="rounded-[2rem] shadow-xl w-full max-w-md object-cover h-64 md:h-80 rotate-1 hover:rotate-0 transition-transform duration-500"
               />
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-smart-accent rounded-full blur-[60px] opacity-10"></div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid - Smaller gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {[
            {
              title: "EL Imaging",
              icon: <Camera className="h-6 w-6 text-white" />,
              color: "bg-blue-600",
              desc: "\"Radiografia\" panourilor fotovoltaice. Vizualizăm defectele interne invizibile ochiului uman.",
              features: ["Testare on-site/lab", "Identificare PID", "Validare loturi"]
            },
            {
              title: "Curba I-V",
              icon: <TrendingUp className="h-6 w-6 text-white" />,
              color: "bg-teal-500",
              desc: "Măsurarea caracteristicii Curent-Tensiune în condiții de operare reale.",
              features: ["Determinare Voc, Isc", "Identificare mismatch", "Raport garanție"]
            },
            {
              title: "Termografie IR",
              icon: <Activity className="h-6 w-6 text-white" />,
              color: "bg-rose-500",
              desc: "Scanarea termică pentru detectarea punctelor fierbinți (hotspots) ce reduc randamentul.",
              features: ["Prevenire incendiu", "Diode defecte", "Analiză umbrire"]
            }
          ].map((srv, i) => (
             <div key={i} className="bg-white rounded-[1.5rem] p-7 shadow-soft border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className={`w-12 h-12 rounded-xl ${srv.color} flex items-center justify-center mb-5 shadow-md shadow-gray-200`}>
                 {srv.icon}
               </div>
               <h3 className="text-xl font-bold text-smart-blue mb-3">{srv.title}</h3>
               <p className="text-gray-500 mb-6 leading-relaxed text-sm">{srv.desc}</p>
               <ul className="space-y-2.5">
                 {srv.features.map((f, idx) => (
                   <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                     <CheckCircle2 className="w-4 h-4 text-green-500 mr-2.5" />
                     {f}
                   </li>
                 ))}
               </ul>
             </div>
          ))}
        </div>

        {/* AI Tool Demo - Refined */}
        <div className="bg-white rounded-[2.5rem] shadow-soft border border-gray-100 p-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
          
           <div className="relative z-10">
             <div className="flex justify-between items-center mb-8">
               <div>
                  <span className="text-smart-accent font-bold uppercase tracking-widest text-[10px] mb-1 block">AI Powered</span>
                  <h2 className="text-2xl font-bold text-smart-blue">EL Analyzer (Demo)</h2>
               </div>
             </div>

             <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                   <div className="border border-dashed border-gray-200 rounded-[1.5rem] h-64 flex flex-col items-center justify-center hover:border-smart-blue hover:bg-blue-50/30 transition-all cursor-pointer relative group bg-gray-50/30">
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                      {selectedImage ? (
                        <img src={selectedImage} alt="Scan" className="h-full w-full object-contain rounded-[1.2rem] p-2" />
                      ) : (
                        <div className="text-center p-6">
                           <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3 text-smart-blue group-hover:scale-110 transition-transform">
                             <UploadCloud className="w-6 h-6" />
                           </div>
                           <p className="font-bold text-gray-700 text-sm">Trage imaginea EL aici</p>
                           <p className="text-[10px] text-gray-400 mt-1">Supports high-res PNG/JPG</p>
                        </div>
                      )}
                   </div>
                   <button 
                      onClick={runAnalysis}
                      disabled={!selectedImage || isAnalyzing}
                      className="mt-5 w-full py-3.5 bg-smart-blue text-white rounded-xl font-bold text-sm hover:bg-smart-tech disabled:opacity-50 transition-all shadow-md"
                    >
                      {isAnalyzing ? 'Se procesează...' : 'Rulează Diagnostic'}
                   </button>
                </div>

                <div className="flex-1 bg-gray-50 rounded-[1.5rem] p-6 border border-gray-100 min-h-[250px]">
                   <h3 className="font-bold text-gray-400 uppercase tracking-widest text-[10px] mb-3">Raport Analiză</h3>
                   <div className="prose prose-sm prose-blue text-gray-600 text-sm leading-relaxed">
                      {analysisResult || "Încarcă o imagine pentru a începe analiza AI..."}
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;