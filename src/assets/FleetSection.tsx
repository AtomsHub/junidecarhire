import { useState } from "react"
import { cars } from "../data/CarData"
import type { Car } from "../data/CarData"
import { Users, ArrowRight, ChevronDown, Filter } from "lucide-react"

type FleetProps = {
  onBookNow: (car: Car) => void
}

const FleetSection = ({ onBookNow }: FleetProps) => {
  const [showAll, setShowAll] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [seatsFilter, setSeatsFilter] = useState("All")

  const categories = ["All", ...new Set(cars.map(car => car.category))]
  const filteredCars = cars.filter(car => {
    const categoryMatch = categoryFilter === "All" || car.category === categoryFilter;

    const carSeats = car.category === "Car" ? "5" : "7+";
    const seatsMatch = seatsFilter === "All" || carSeats === seatsFilter;
    
    return categoryMatch && seatsMatch;
  })

  const visibleCars = showAll ? filteredCars : filteredCars.slice(0, 6)

  return (
    <section id="fleet" className="bg-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-accent font-bold tracking-widest text-sm uppercase">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-text mt-6 mb-4">
            Find Your Perfect Ride
          </h2>
          <p className="text-brand-text-muted max-w-xl mx-auto leading-relaxed">
            Select from our premium range of vehicles, filtered to meet your specific seating and category requirements.
          </p>
        </div>

        {/* --- Filter Controls --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {setCategoryFilter(cat); setShowAll(false)}}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  categoryFilter === cat 
                  ? "bg-brand-accent text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden md:block h-8 w-px bg-gray-200"></div>

          {/* Seats Filter */}
          <div className="flex gap-2">
            {["All", "5", "7+"].map(seat => (
              <button
                key={seat}
                onClick={() => {setSeatsFilter(seat); setShowAll(false)}}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  seatsFilter === seat 
                  ? "bg-slate-900 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                {seat === "All" ? "All Seats" : `${seat} Seats`}
              </button>
            ))}
          </div>
        </div>

        {/* --- Fleet Grid --- */}
        {visibleCars.length > 0 ? (
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm border border-brand-accent/20 text-brand-accent px-3 py-1 rounded-md shadow-sm">
                      {car.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-brand-text leading-tight group-hover:text-brand-accent transition-colors">
                      {car.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-brand-text-muted">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {car.category === "Car" ? "5 Seats" : "7+ Seats"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onBookNow(car)}
                    className="w-full py-3.5 rounded-xl border-2 border-brand-accent text-brand-text font-bold flex items-center justify-center gap-2 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-500">No vehicles match your filters</h3>
            <button 
              onClick={() => {setCategoryFilter("All"); setSeatsFilter("All")}}
              className="mt-4 text-brand-accent font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* --- Toggle Button --- */}
        {filteredCars.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-brand-text-muted px-6 py-3 rounded-xl border-2 border-gray-100 font-bold text-sm hover:border-brand-accent hover:text-brand-accent transition-all"
            >
              {showAll ? "Show Fewer Vehicles" : `View All Vehicles`}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FleetSection