import { motion } from 'framer-motion';
import { Eye, TrendingUp, Trophy, Star, Quote, IndianRupee } from 'lucide-react';

const stats = [
  {
    icon: <Eye className="w-8 h-8 text-electric-yellow" />,
    value: "25M+",
    label: "Local Reach across Ahmedabad & Gujarat."
  },
  {
    icon: <IndianRupee className="w-8 h-8 text-bandhani-red" />,
    value: "₹15L+",
    label: "Estimated Revenue generated for Gujarati clients."
  },
  {
    icon: <Trophy className="w-8 h-8 text-gold" />,
    value: "10+",
    label: "Highly Satisfied Local Business Owners."
  }
];

const testimonials = [
  {
    name: "Bhavikbhai Patel",
    business: "Jay Mahakali Tours & Travels",
    quote: "Our Instagram presence has completely transformed. The content quality, design, and overall feed now look professional and premium, which has significantly improved how customers perceive our brand."
  },
  {
    name: "Nikunjbhai Ahir",
    business: "Waycation tour & International",
    quote: "Before working with Postify, our Instagram had minimal traction. Within a short span, our content started gaining serious momentum—one reel crossed 1 million views even when we had just around 150 followers. More importantly, this wasn't just vanity growth—we started receiving genuine travel inquiries directly through Instagram, turning content into real business opportunities."
  },
  {
    name: "Brijeshbhai Chavda",
    business: "The Black Bird's Cafe",
    quote: "Postify didn't just manage our social media—they helped us position our brand strategically. Through consistent content and smart campaigns, our cafe started gaining strong local recognition across Ahmedabad. We've seen a noticeable increase in customer engagement and footfall driven by Instagram."
  }
];

export const Results = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="results">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-bandhani-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-gold/30"
          >
            <span className="text-sm font-bold tracking-wider text-gold">Trusted By Local Brands</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 text-white"
          >
            Real Results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow to-bandhani-red">Gujarat's Best.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Whether you run a Garba class, a cafe, or a travel agency, our high-energy marketing engines are proven to drive massive local footfall and genuine inquiries.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="mb-4">
                {stat.icon}
              </div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                {stat.value}
              </div>
              <p className="text-white/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-20 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Customer Engagement & Inquiries Trend</h3>
              <p className="text-white/50">Average Client Growth After Joining Postify</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mt-4 md:mt-0 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-electric-yellow animate-pulse" />
              <span className="text-sm font-bold text-white/80">Live Data</span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative w-full h-64 md:h-80">
            <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF00FF" /> {/* magenta */}
                  <stop offset="100%" stopColor="#FFD700" /> {/* gold */}
                </linearGradient>
                <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FF00FF" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Lines */}
              {[0, 1, 2, 3].map(i => (
                <line key={i} x1="0" y1={i * 75 + 25} x2="1000" y2={i * 75 + 25} stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5,5" />
              ))}

              {/* Area Under Path */}
              <path
                d="M 0 250 C 150 240, 250 200, 400 180 C 550 160, 650 80, 800 60 C 900 40, 950 20, 1000 10 L 1000 300 L 0 300 Z"
                fill="url(#areaGrad)"
              />

              {/* Data Path */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M 0 250 C 150 240, 250 200, 400 180 C 550 160, 650 80, 800 60 C 900 40, 950 20, 1000 10"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="6"
                filter="url(#glow)"
              />

              {/* Data Points */}
              <circle cx="0" cy="250" r="6" fill="#111" stroke="#FF00FF" strokeWidth="4" />
              <circle cx="400" cy="180" r="6" fill="#111" stroke="#FF6B00" strokeWidth="4" />
              <circle cx="800" cy="60" r="6" fill="#111" stroke="#FFD700" strokeWidth="4" />
              <circle cx="1000" cy="10" r="8" fill="#FFD700" filter="url(#glow)" />
            </svg>

            {/* X Axis Labels */}
            <div className="absolute -bottom-8 left-0 w-full flex justify-between text-white/40 text-xs md:text-sm font-bold uppercase tracking-widest px-2">
              <span>June</span>
              <span>July</span>
              <span>August</span>
              <span>September</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-300 relative group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 text-electric-yellow fill-electric-yellow" />
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-8 italic relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
