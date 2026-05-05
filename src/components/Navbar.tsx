import logo from '../../postifyLogo.png';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="container mx-auto flex justify-between items-center glass px-8 py-4 rounded-2xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
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

        <a
          href="https://wa.me/917874414328"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold px-6 py-2.5 rounded-full bg-gradient-to-r from-electric-yellow to-gold text-black hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,215,0,0.4)]"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};
