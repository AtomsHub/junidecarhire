import { useState } from "react"
import { cars } from "../data/CarData"
import type { Car } from "../data/CarData"
type FleetProps = {
  onBookNow: (car: Car) => void
}

const FleetSection = ({ onBookNow }: FleetProps) => {
  const [showAll, setShowAll] = useState(false)
  const visibleCars = showAll ? cars : cars.slice(0, 6)

  return (
    <section id="fleet" className="container max-w-auto px-4 py-20 md:py-25">
      <div className=" text-center space-y-2 mb-10">
        <p className="text-sm font-bold text-brand-accent">Our Fleet</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Find Your Perfect Ride</h1>
        <p className="text-lg text-brand-text-muted leading-relaxed">Choose from our diverse selection of well-maintained vehicles.<br/> From fuel-efficient cars to spacious SUVs, we have something for everyone.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {visibleCars.map(car => (
          <div key={car.id} className="shadow p-4 rounded-xl bg-white border border-brand-primary">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
            <span className="text-xs bg-brand-accent text-white px-2 py-1 rounded">
              {car.category}
            </span>

            <h3 className="text-lg font-semibold mt-3">{car.name}</h3>

            <button
              onClick={() => onBookNow(car)}
              className="mt-4 w-full bg-brand-primary text-white py-2 rounded-lg"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* See More $ See Less Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-brand-accent font-semibold border border-brand-accent px-6 py-2 rounded-lg hover:bg-brand-accent hover:text-white transition"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  )
}

export default FleetSection
