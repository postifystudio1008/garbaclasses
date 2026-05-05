import { Phone, MessageCircle, Mail, Zap, ArrowRight } from 'lucide-react';
import logo from '../../postifyLogo.png';

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative pt-32 pb-12 px-4 overflow-hidden" id="contact">
      {/* Footer Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-bandhani-red/20 via-deep-charcoal to-deep-charcoal" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Massive CTA Card */}
        <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 text-center mb-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-yellow/10 to-bandhani-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl mb-8 border border-white/10 shadow-[0_0_30px_rgba(255,215,0,0.15)] group-hover:scale-110 transition-transform duration-500 relative z-10">
            <Zap className="w-8 h-8 text-electric-yellow" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight relative z-10">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow to-gold">Scale?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-medium relative z-10">
            Stop losing customers to your competitors. Let's build your premium brand presence today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20">
            <a
              href="https://wa.me/917874414328?text=Hi,%20Postify%20Studio!%20I'm%20ready%20to%20grow%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(37,211,102,0.3)] text-lg group/btn"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917874414328"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform text-lg shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            >
              <Phone className="w-6 h-6 text-black" />
              Call +91 78744 14328
            </a>
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-4">

          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Postify Logo" className="h-12 w-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]" />
              <span className="font-black text-3xl tracking-tighter text-white">Postify</span>
            </div>
            <p className="text-white/60 text-lg max-w-sm">
              Gujarat's premier social media growth engine for local businesses.
            </p>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:postifystudio1008@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-electric-yellow transition-colors text-lg">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="truncate max-w-[200px] sm:max-w-xs">postifystudio1008@gmail.com</span>
              </a>
              <a href="tel:+917874414328" className="flex items-center gap-4 text-white/70 hover:text-electric-yellow transition-colors text-lg">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                +91 78744 14328
              </a>
            </div>
          </div>

          {/* Socials Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-6">Follow Our Work</h4>
            <a
              href="https://instagram.com/postify.studioo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/70 hover:text-[#E1306C] transition-colors text-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[#E1306C]/20 group-hover:border-[#E1306C]/50 transition-colors">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="font-medium">@postify.studioo</span>
            </a>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <p className="text-white/40 text-sm font-medium">© 2026 Postify Studio. All Rights Reserved. Designed to Convert.</p>
        </div>
      </div>
    </footer>
  );
};
