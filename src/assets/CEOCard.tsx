import { useState } from 'react';
import CEOIMG from '../image/CEO.png';

const CEOCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100">
          
          {/* Image Side */}
          <div className="md:w-2/5 h-80 md:h-auto bg-gray-100 relative">
            <img 
              src={CEOIMG} 
              alt="Olayinka Alase-Olaniru"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content Side */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-text mb-1">
              Olayinka Alase-Olaniru
            </h2>
            <p className="text-lg text-brand-accent font-semibold mb-6">
              CEO / Managing Director, JCEE
            </p>
            
            <p className="text-brand-text-muted leading-relaxed mb-8">
              Mrs. Olayinka Alase-Olaniru is an accomplished executive who has redefined 
              mobility solutions across North-Western Nigeria. Since co-founding JCEE in 2013, 
              she has led the company to become a trusted partner for NGOs, government agencies, 
              and corporate clients.
            </p>

            <button 
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-accent text-brand-text-on-primary font-bold rounded-xl hover:bg-brand-accent-dark transition-all shadow-lg shadow-brand-accent/20 w-fit"
            >
              Read Full Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-text/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
              <div>
                <h3 className="text-2xl font-black text-brand-text">Professional Profile</h3>
                <p className="text-brand-accent text-sm font-bold">Olayinka Alase-Olaniru</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-brand-text-muted hover:text-brand-accent text-3xl transition-colors"
              >
                &times;
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-8">
              <div className="prose prose-slate max-w-none">
                <h4 className="text-xl font-bold text-brand-text mb-4">Executive Background</h4>
                <p className="text-brand-text-muted mb-6 leading-relaxed">
                  Mrs. Olayinka Alase‑Olaniru is an accomplished business executive with a rich and diverse background spanning mobility, transportation, catering, and healthcare. She holds academic training in Economics and International Nursing, combining analytical precision with a deep commitment to service excellence.
                </p>
                
                <h4 className="text-xl font-bold text-brand-text mb-4">Leadership & Key Achievements</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 list-none pl-0">
                  {[
                    "Expanded the company’s fleet to include economy, luxury, and eco‑friendly vehicles.",
                    "Introduced digital booking systems and automated fleet‑tracking technologies.",
                    "Strengthened partnerships with corporate bodies and government agencies.",
                    "Championed sustainability initiatives and hybrid vehicle integration."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text-muted bg-brand-accent-soft p-3 rounded-xl border border-brand-accent/10">
                      <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-brand-text mb-4">Our Vision</h4>
                <p className="text-brand-text-muted italic border-l-4 border-brand-accent pl-6 py-4 bg-brand-accent-soft rounded-r-xl">
                  "Under Mrs. Olayinka Alase‑Olaniru’s leadership, JCEE is committed to redefining mobility through reliable, affordable, and technology-driven car rental solutions."
                </p>
              </div>
            </div>
            
            <div className="p-6 border-t bg-gray-50 flex justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-8 py-2 bg-brand-accent text-brand-text-on-primary rounded-xl hover:bg-brand-accent-dark transition-colors font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CEOCard;