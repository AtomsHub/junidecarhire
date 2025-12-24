import { useState } from "react"
import { cars } from "../data/CarData"
import type { Car } from "../data/CarData"
import { Users, ArrowRight, ChevronDown } from "lucide-react"

type FleetProps = {
  onBookNow: (car: Car) => void
}

const FleetSection = ({ onBookNow }: FleetProps) => {
  const [showAll, setShowAll] = useState(false)
  const visibleCars = showAll ? cars : cars.slice(0, 6)

  return (
    <section id="fleet" className="bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-text mt-6 mb-4">
            Find Your Perfect Ride
          </h2>
          <p className="text-brand-text-muted max-w-xl mx-auto leading-relaxed">
            Diverse selection of well-maintained vehicles for corporate and individual needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCars.map(car => (
            <div 
              key={car.id} 
              className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-52 bg-gray-50 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-accent-soft border border-brand-accent text-brand-accent px-3 py-1 rounded-md shadow-sm">
                    {car.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-brand-text leading-tight hover:text-brand-accent transition-colors">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-brand-text-muted">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {car.category === "Car" ? "5" : "7+"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onBookNow(car)}
                  className="w-full py-3.5 rounded-xl border-2 border-brand-accent text-brand-text font-bold flex items-center justify-center gap-2 group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition-all duration-300"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-brand-text-muted p-2 rounded-xl border-2 border-brand-accent font-bold text-sm hover:text-brand-accent transition-colors"
          >
            {showAll ? "Show Less" : "View Entire Fleet"}
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FleetSection