import { MapPin, Globe } from 'lucide-react';

const RouteCoverage = () => {
  const regions = [
    { 
      title: "North West Hub", 
      routes: "Kebbi • Sokoto • Kano • Kaduna • Jigawa", 
      desc: "Primary operational corridor with daily fleet availability." 
    },
    { 
      title: "North East Range", 
      routes: "Bauchi • Gombe • Adamawa", 
      desc: "Extensive coverage for NGO, Government, and Corporate projects." 
    },
    { 
      title: "North Central", 
      routes: "Plateau State", 
      desc: "Executive travel and logistics support in the Plateau region." 
    },
    { 
      title: "Custom Coverage", 
      routes: "Nationwide Link", 
      desc: "Interstate leasing available for specialized institutional needs." 
    },
  ];

  return (
    <section id="network" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-3">
            Our Network
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Regional Operational Range
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Junide Cutting Edge Enterprises Limited (JCEEL) maintains a robust presence across Northern Nigeria, ensuring reliable logistics and transport.
          </p>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-slate-600 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2 transition-colors">
                {item.title}
              </h4>
              <p className="text-brand-accent font-semibold text-sm mb-3 italic">
                {item.routes}
              </p>
              <p className="text-gray-600 text-sm transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Banner */}
        <div className="mt-12 p-8 bg-slate-600 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
           <div className="bg-brand-accent p-4 rounded-full">
              <Globe className="text-white w-8 h-8 animate-spin-slow" />
           </div>
           <div className="text-center md:text-left">
              <h4 className="text-white text-xl font-bold">Don't see your destination?</h4>
              <p className="text-gray-300">
                We provide custom interstate leasing and logistics for NGOs and Government agencies nationwide.
              </p>
           </div>
           <button className="md:ml-auto bg-brand-accent text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all">
              <a href="#contact">Inquire About Routes</a>
           </button>
        </div>
      </div>
    </section>
  );
};

export default RouteCoverage;