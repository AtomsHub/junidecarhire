import { useState } from 'react'
import type { Car } from "./data/CarData"
import AboutSection from './assets/AboutSection'
import HeroSection from './assets/HeroSection'
import NavbarSection from './assets/NavbarSection'
import FleetSection from './assets/FleetSection'
import ContactSection from './assets/ContactSection'
import Testimonials from './assets/Testimonials'
import Footer from './assets/Footer'
import BookingModal from './assets/BookingModal'
import CEOCard from './assets/CEOCard'
import RouteCoverage from './assets/RouteCoverage'

const App = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return(
    
    <div className='min-h-screen'>
      <NavbarSection />
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedCar(null);
        }}
        selectedCar={selectedCar}
      />
      <HeroSection />
      <AboutSection />
      <RouteCoverage />
      <FleetSection onBookNow={(car) => {
          setSelectedCar(car)
          setIsModalOpen(true)
        }}
        />
      <ContactSection />
      <Testimonials />
      <CEOCard />
      <Footer />
    </div>
  )
}
export default App