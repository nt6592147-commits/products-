import React from 'react';
import { motion } from 'framer-motion';

const MOMENTS = [
  { id: 1, title: "THE MORNING RITUAL", subtitle: "Wellness & Balance", desc: "Start your day with clarity. Before the noise of the world creeps in, take a moment for yourself.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", align: "right" },
  { id: 2, title: "ELEVATED CULINARY", subtitle: "Taste Profile", desc: "Aura Pure’s exceptionally clean and crisp taste profile acts as the perfect palate cleanser.", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80", align: "left" },
  { id: 3, title: "THE ACTIVE PURSUIT", subtitle: "Endurance & Recovery", desc: "Push your limits. Sourced from deep underground aquifers, our water contains naturally occurring electrolytes.", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80", align: "right" }
];

export default function Lifestyle() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-[#F8FAFC]">
      <section className="relative min-h-screen pt-32 pb-16 w-full bg-[#062B45] overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 bg-cover bg-center z-0 scale-110" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1920&q=80)` }} />
        <div className="absolute inset-0 bg-[#062B45]/50 mix-blend-multiply z-10" />
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>LIVE IN THE<br />CLEAR.</h1>
          <p className="text-lg text-[#C7D6DF] max-w-2xl mx-auto font-light">Hydration isn't just science. It is an aesthetic, a feeling, and a lifestyle.</p>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {MOMENTS.map((moment) => (
            <div key={moment.id} className={`flex flex-col ${moment.align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
              <motion.div initial={{ opacity: 0, x: moment.align === 'right' ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
                <h4 className="text-[#075985] font-bold tracking-widest text-sm uppercase mb-4">{moment.subtitle}</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-[#062B45] mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>{moment.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">{moment.desc}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:w-1/2 w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={moment.image} alt={moment.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}