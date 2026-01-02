import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappNumber = "2348030619048";
  const message = encodeURIComponent("Hello JCEEL, I'm interested in your car rental services and would like to make an inquiry.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`flex items-center justify-center w-10 h-10 p-1 rounded-full bg-slate-900 text-white shadow-2xl transition-all duration-300 hover:bg-brand-accent hover:-translate-y-1 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* WhatsApp CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center p-3 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/20"
      >
        {/* Subtle Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        <MessageCircle className="w-7 h-7 relative z-10" />
        
        {/* Tooltip on Hover */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-[#25D366] text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with JCEEL
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;