import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Star, ChevronRight } from 'lucide-react';

export const Pricing = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="pricing">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bandhani-red/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-electric-yellow via-gold to-bandhani-red"
          >
            Claim Your Navratri Spotlight
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Don't let your Garba classes go unnoticed. Choose the ultimate high-energy content package and let's make your garba classes fully packed this season.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Basic Package */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl flex flex-col border border-white/5 hover:border-white/20 transition-all relative overflow-hidden"
          >
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">Starter Garba Pack</h3>
              <p className="text-white/60 mb-6 text-sm">Perfect to build early momentum before the festive season hits.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">₹7,000</span>
                <span className="text-white/50">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              {[
                '4 High-Energy Garba Reels',
                'Local Reach Strategy',
                'Trending Garba Audio Curation',
                'Engaging Caption Writing'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/917874414328?text=Hi,%20I'm%20interested%20in%20the%20Starter%20Garba%20Pack%20(₹7,000/month)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-bold text-white flex justify-center items-center gap-2 relative z-10"
            >
              Start Basic Plan
            </a>
          </motion.div>

          {/* Premium Season Pass */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-3xl bg-gradient-to-br from-electric-yellow via-gold to-bandhani-red group transform hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_40px_rgba(255,49,49,0.3)]"
          >
            <div className="bg-deep-charcoal/95 backdrop-blur-xl p-10 rounded-[22px] h-full flex flex-col relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/15 rounded-bl-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-bandhani-red/15 rounded-tr-full blur-3xl pointer-events-none" />

              <div className="mb-8 relative z-10 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-6 h-6 text-gold fill-gold animate-pulse" />
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow to-gold">Navratri Season Pass</h3>
                </div>
                <p className="text-white/80 mb-6">The ultimate VIP package for complete digital domination during the 9 nights of Navratri.</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">₹25,000</span>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-widest bg-white/5 px-2 py-1 rounded">One Time</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-bandhani-red/10 to-gold/10 border border-gold/20 rounded-xl p-4 mb-6 relative z-10">
                <p className="text-gold text-sm font-bold text-center">🔥 Fully Booked Garba Classes Guaranteed</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                {[
                  '2 Cinematic Garba Reels (4K) /week',
                  'Professional Video Shooting',
                  'Trending content creation',
                  'Instagram Growth Strategy',
                  'Targeted Navratri Ad Campaigns',
                  'Priority Event Coverage & Support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-bandhani-red flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-gold/20">
                      <Zap className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/917874414328?text=Hi,%20I'm%20ready%20for%20the%20Navratri%20Season%20Pass%20(₹25,000)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-electric-yellow via-gold to-bandhani-red text-black font-black text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 relative overflow-hidden group/btn flex justify-center items-center gap-2 z-10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Secure Your Season Pass <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
