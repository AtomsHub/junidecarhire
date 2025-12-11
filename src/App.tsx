import { useState } from 'react'
import type { Car } from "./data/CarData"
import AboutSection from './assets/AboutSection'
import HeroSection from './assets/HeroSection'
import NavbarSection from './assets/NavbarSection'
import FleetSection from './assets/FleetSection'
import ContactSection from './assets/ContactSection'
import Testimonials from './assets/Testimonials'
import Footer from './assets/Footer'

const App = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  return(
    
    <div className='min-h-screen'>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <FleetSection onBookNow={setSelectedCar} />
      <ContactSection selectedCar={selectedCar} />
      <Testimonials />
      <Footer />
    </div>
  )
}
export default App