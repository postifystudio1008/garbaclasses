import { motion } from 'framer-motion';
import { Camera, Scissors, Zap, Share2, Users, Flame } from 'lucide-react';

const deliverables = [
  { icon: <Camera />, title: "4K Cinematic Shooting", color: "text-bandhani-red", glow: "group-hover:shadow-[0_0_20px_rgba(255,49,49,0.5)]" },
  { icon: <Scissors />, title: "High-Energy Garba Reels", color: "text-electric-yellow", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,51,0.5)]" },
  { icon: <Zap />, title: "Trending Audio Hooks", color: "text-gold", glow: "group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]" },
  { icon: <Share2 />, title: "Local Reach Ads", color: "text-bandhani-red", glow: "group-hover:shadow-[0_0_20px_rgba(255,49,49,0.5)]" },
  { icon: <Users />, title: "WhatsApp Communities", color: "text-electric-yellow", glow: "group-hover:shadow-[0_0_20px_rgba(255,255,51,0.5)]" },
  { icon: <Flame />, title: "Viral Student Testimonials", color: "text-gold", glow: "group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]" }
];

export const Deliverables = () => {
  return (
    <section className="py-24 px-4 bg-deep-charcoal relative" id="features">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Ultimate Arsenal</h2>
            <p className="text-white/70 text-lg">Everything you need to dominate the 9 nights of Navratri.</p>
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-gold/50 to-transparent hidden md:block" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-4 border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-default`}
            >
              <div className={`p-4 rounded-xl bg-white/5 ${item.color} ${item.glow} group-hover:-translate-y-1 transition-all duration-300 border border-white/10`}>
                {item.icon}
              </div>
              <div className="text-center md:text-left mt-2 md:mt-0">
                <span className="font-bold text-base md:text-lg text-white group-hover:text-gold transition-colors block">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
