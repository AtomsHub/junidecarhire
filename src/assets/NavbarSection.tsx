import { useEffect, useState } from "react";
import Logo from "../image/Logo.png";
import { Menu, X } from "lucide-react";

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const textColor = isScrolled ? 'text-brand-text' : 'text-white';

  const navlink = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Cars", href: "#fleet" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 text-brand-text backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-20 h-20 object-cover" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navlink.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${textColor} hover:text-brand-primary transition-colors`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-primary text-brand-text-on-primary px-4 py-2 rounded-md hover:bg-brand-primary-dark transition"><a href="#fleet">Book Now</a></button>
        </div>

        {/* Hamburger Button */}
        <button
          className={`md:hidden ${textColor} flex items-center`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 space-y-4 border-t shadow-sm">
          {navlink.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-brand-text hover:text-brand-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="w-full bg-brand-primary text-brand-text-on-primary py-2 rounded-md hover:bg-brand-primary-dark transition">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarSection;
