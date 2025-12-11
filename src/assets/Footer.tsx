import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-brand-primary/70 text- py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-">Junide Cutting Edge Enterprises</h2>
          <p className="text-brand-text">
            Reliable cars, smooth rides. Rent your dream car today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text- mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text- transition">Home</a></li>
            <li><a href="#about" className="hover:text- transition">About</a></li>
            <li><a href="#fleet" className="hover:text- transition">Fleet</a></li>
            <li><a href="#contact" className="hover:text- transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text- mb-2">Contact</h3>
          <p>Email: alaseyoshinake@yahoo.com</p>
          <p>Phone: +234 8032497890, +234 8121685731</p>
          <p>Head Office: House 5, Adjacent Hero Science Academy, Behind Gando, Gesse Phase Three, Birnin Kebbi, Kebbi State.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text- transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text- transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text- transition"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t py-5">
        &copy; {new Date().getFullYear()} JCEE. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
