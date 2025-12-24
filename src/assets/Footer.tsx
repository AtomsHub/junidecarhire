import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white/90 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-brand-accent">JUNIDE <span className="text-white">CAR HIRE</span></h2>
          <p className="text-sm leading-relaxed opacity-80">
            A subsidiary of Junide Cutting Edge Enterprises Limited. Providing premium, 
            reliable mobility solutions for NGOs and corporate organizations since 2013.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-brand-accent hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-brand-accent hover:text-white transition-all"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-brand-accent hover:text-white transition-all"><Instagram size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-6">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-brand-accent transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
            <li><a href="#fleet" className="hover:text-brand-accent transition-colors">Our Fleet</a></li>
            <li><a href="#contact" className="hover:text-brand-accent transition-colors">Booking & Inquiry</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-6">Get In Touch</h3>
          <div className="flex items-start gap-3 text-sm">
            <Mail size={16} className="text-brand-accent mt-1 shrink-0" />
            <p>junideenterprises22@gmail.com</p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Phone size={16} className="text-brand-accent mt-1 shrink-0" />
            <p>+234 803 249 7890<br/>+234 812 168 5731</p>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-6">Our Offices</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-accent mt-1 shrink-0" />
              <p><span className="font-bold text-white">Head Office:</span> House 5, Adj. Hero Science Academy, Gesse Phase 3, Birnin Kebbi.</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-accent mt-1 shrink-0" />
              <p><span className="font-bold text-white">Ilorin Branch:</span> Red Roof Building, Yamma Yamma Rd, Kwara State.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} Junide Cutting Edge Enterprises Limited. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer