import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../postifyLogo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="w-full">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Postify Logo" className="h-8 md:h-10 w-auto drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]" />
            <span className="font-black text-2xl tracking-tighter text-white">Postify</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gold transition-colors">What You Get</a>
            <a href="#results" onClick={(e) => { e.preventDefault(); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gold transition-colors">Results</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gold transition-colors">Packages</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gold transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/917874414328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold px-6 py-2.5 rounded-full bg-gradient-to-r from-electric-yellow to-gold text-black hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-6 flex flex-col gap-4 text-center">
            <a href="#features" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white hover:text-gold transition-colors">What You Get</a>
            <a href="#results" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white hover:text-gold transition-colors">Results</a>
            <a href="#pricing" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white hover:text-gold transition-colors">Packages</a>
            <a href="#contact" onClick={(e) => { setIsOpen(false); e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white hover:text-gold transition-colors">Contact</a>
            <a
              href="https://wa.me/917874414328"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-auto text-sm font-bold px-6 py-2.5 rounded-full bg-gradient-to-r from-electric-yellow to-gold text-black hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)] inline-block w-full max-w-[200px]"
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
