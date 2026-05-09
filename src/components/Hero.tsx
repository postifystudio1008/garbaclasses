import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Cinematic Background Blur */}
      <div className="absolute inset-0 z-0">
        {/* Navratri themed background image */}
        <div className="absolute inset-0 bg-[url('/garba_bg.png')] bg-cover bg-center opacity-70 scale-110" />
        {/* Gradients to blend into the theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/60 via-deep-charcoal/40 to-deep-charcoal/90" />
        {/* Colorful glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bandhani-red/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-gold/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          <span className="text-sm font-bold tracking-wider uppercase text-gold">Navratri 2026 Special Offers</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight"
        >
          Pack Your Garba Classes <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow via-gold to-bandhani-red drop-shadow-lg">
            Before Anyone Else
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium"
        >
          Students go where the hype is. We build that hype. <br className="hidden md:block" />
          Get cinematic Garba reels and targeted local ads that turn viewers into paying students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/917874414328?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20Navratri%20Season%20Pass!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-5 bg-gradient-to-r from-electric-yellow via-gold to-bandhani-red rounded-xl text-black text-lg font-black flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,49,49,0.4)]"
          >
            <Zap className="w-5 h-5" />
            Maximize Your Class Enquiries
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#pricing"
            className="px-8 py-5 rounded-xl border border-white/20 hover:bg-white/10 text-white text-lg font-bold transition-all flex items-center gap-2"
          >
            View Pricing Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
};
