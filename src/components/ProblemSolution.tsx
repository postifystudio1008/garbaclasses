import { motion } from 'framer-motion';
import { Users, Video, Target } from 'lucide-react';

const problems = [
  {
    icon: <Users className="w-8 h-8 text-bandhani-red" />,
    title: "Half-Empty Batches",
    description: "Students are flocking to Garba classes that look exciting online. If your classes aren't packed yet, you are losing out to the competition."
  },
  {
    icon: <Video className="w-8 h-8 text-electric-yellow" />,
    title: "Boring Phone Videos",
    description: "Posting shaky, low-quality clips won't cut it. You need high-energy, cinematic reels that make people want to join your circle instantly."
  },
  {
    icon: <Target className="w-8 h-8 text-gold" />,
    title: "Our Viral Strategy",
    description: "We bring professional drones and cameras, mix it with trending Garba beats, and run hyper-local ads to guarantee sold-out batches."
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Are Your Competitors <span className="text-transparent bg-clip-text bg-gradient-to-r from-bandhani-red to-gold">Fully Booked?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            It's not about who teaches the best steps. Students join the classes with the biggest online hype. We build that hype for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-3xl group border border-white/5 hover:border-gold/30 hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_30px_rgba(255,215,0,0.1)]"
            >
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-white/10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
