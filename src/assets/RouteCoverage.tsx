import { MapPin, Globe } from 'lucide-react';

const RouteCoverage = () => {
  const regions = [
    { title: "Core Corridor", routes: "Kebbi • Sokoto • Zamfara", desc: "Daily fleet availability" },
    { title: "Main Hubs", routes: "Abuja • Kaduna • Kano", desc: "Executive & Corporate travel" },
    { title: "North East", routes: "Borno • Yobe • Gombe • Bauchi", desc: "Project & NGO support" },
    { title: "Southern Link", routes: "Ilorin, Kwara State", desc: "Strategic Branch Office" },
  ];

  return (
    <section id="network" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-3">Our Network</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Regional Operational Range</h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((item, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-brand-primary transition-all duration-300">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-white">{item.title}</h4>
              <p className="text-brand-primary font-bold text-sm mb-3 group-hover:text-brand-accent italic">
                {item.routes}
              </p>
              <p className="text-gray-600 text-sm group-hover:text-white/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-brand-primary rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-xl">
           <div className="bg-brand-accent p-4 rounded-full">
              <Globe className="text-white w-8 h-8 animate-spin-slow" />
           </div>
           <div className="text-center md:text-left">
              <h4 className="text-white text-xl font-bold">Don't see your destination?</h4>
              <p className="text-white/80">We provide custom interstate leasing and logistics for NGOs and Government agencies nationwide.</p>
           </div>
           <button className="md:ml-auto bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-colors">
              <a href="#contact">Inquire About Routes</a>
           </button>
        </div>
      </div>
    </section>
  );
};

export default RouteCoverage;