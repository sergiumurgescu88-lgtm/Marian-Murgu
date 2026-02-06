import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="text-smart-blue bg-[#F8FAFC] min-h-screen pt-28 pb-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-glass border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
        
        <div className="lg:w-2/5 bg-smart-blue p-10 lg:p-12 text-white relative flex flex-col justify-between">
           <div className="absolute top-0 right-0 w-48 h-48 bg-smart-accent rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Discută cu un inginer</h2>
              <p className="text-gray-300 font-light mb-10 text-sm">Validează fezabilitatea tehnică a investiției tale.</p>
              
              <div className="space-y-6">
                 <div className="flex items-start">
                    <Mail className="w-5 h-5 text-smart-accent mt-0.5 mr-3" />
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                       <p className="text-sm font-medium">office@smartrenewable.energy</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-smart-accent mt-0.5 mr-3" />
                    <div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Locație</p>
                       <p className="text-sm font-medium">București, România</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:w-3/5 p-10 lg:p-12">
           <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Nume</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-smart-blue/20" />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Companie</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-smart-blue/20" />
                 </div>
              </div>
              <div>
                 <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Email</label>
                 <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-smart-blue/20" />
              </div>
              <div>
                 <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Mesaj</label>
                 <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-smart-blue/20 resize-none"></textarea>
              </div>
              <button className="w-full bg-smart-blue text-white font-bold text-sm py-3.5 rounded-xl hover:bg-smart-tech transition-all shadow-md">
                 Trimite Solicitare
              </button>
           </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;