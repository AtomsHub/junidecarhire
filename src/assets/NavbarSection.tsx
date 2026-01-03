import { useEffect, useState } from "react";
import Logo from "../image/Logo.png";
import { Menu, X } from "lucide-react";

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = isScrolled || isOpen;
  const textColor = isDarkText ? 'text-slate-900' : 'text-white';

  const navlinks = [
    { name: "Home", href: "#home" },
    { name: "Network", href: "#network" },
    { name: "Fleet", href: "#fleet" },
    { name: "Contact", href: "#contact" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo Branding */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <img 
            src={Logo} 
            className={`transition-all duration-500 object-contain ${
              isScrolled ? 'w-15 h-15 md:w-16 md:h-16' : 'w-16 h-16 md:w-22 md:h-22'
            }`} 
            alt="JCEEL Logo" 
          />
          <div className="flex flex-col leading-tight">
            <span className={`font-black text-xl md:text-2xl tracking-tighter transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              JCEEL
            </span>
            <span className={`text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase ${
              isScrolled ? 'text-brand-accent' : 'text-brand-accent'
            }`}>
              Car Hire
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold ${textColor} hover:text-brand-accent transition-colors`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#fleet" 
            className="bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-900 transition-all shadow-lg shadow-brand-accent/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-0 bg-white shadow-2xl transition-all duration-300 lg:hidden ${
        isOpen ? 'top-[100] opacity-100' : 'top-[-500%] opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 gap-6">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-slate-900 hover:text-brand-accent border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#fleet"
            onClick={() => setIsOpen(false)}
            className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-center shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
