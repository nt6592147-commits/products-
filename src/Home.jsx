import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1740905328339-03ce7edcdc28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  brand: "https://images.unsplash.com/photo-1609788174793-f3ea618960ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  lifestyle: "https://plus.unsplash.com/premium_photo-1692439053550-35adf7966571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
};

const PROCESS_STEPS = [
  { num: '01', title: 'WATER SOURCING', desc: 'Sourced from pristine, protected natural environments ensuring an untouched beginning.' },
  { num: '02', title: 'FILTRATION', desc: 'Refined through multiple layers of natural elements to achieve perfect clarity.' },
  { num: '03', title: 'QUALITY CONTROL', desc: 'Rigorous testing to maintain our signature crisp taste and perfect mineral balance.' },
  { num: '04', title: 'PACKAGING', desc: 'Sealed in premium, sustainable materials to lock in freshness until the moment you open it.' },
];

const LiquidButton = ({ to, children }) => (
  <Link to={to} className="relative inline-flex group items-center justify-center mt-6 cursor-pointer">
    <motion.div animate={{ rotate: [0, 360], borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"] }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute -inset-4 bg-gradient-to-r from-cyan-300 via-blue-500 to-teal-300 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500" />
    <motion.div animate={{ rotate: [360, 0], borderRadius: ["50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%"] }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} className="absolute -inset-1 bg-gradient-to-r from-[#DDF5FC] to-blue-400 opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 px-10 py-5 bg-[#031A2B]/30 backdrop-blur-md border border-white/40 text-white rounded-[2rem] font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center gap-3">
      {children}
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full bg-[#062B45] overflow-hidden flex items-center justify-center pt-32 pb-16 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#031A2B] z-0" />
        <motion.div style={{ y: y1, opacity }} className="absolute w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#075985] rounded-full blur-[120px] opacity-40 top-1/4 left-1/4 mix-blend-screen" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="md:w-1/2 text-left z-20">
            <motion.div style={{ y: y2 }} className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 tracking-tight drop-shadow-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                TASTE THE<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDF5FC] to-white">PUREST DROP.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#C7D6DF] mb-8 max-w-md font-light leading-relaxed drop-shadow-md">
                Sourced from untouched natural springs, delivered in a bottle designed for life.
              </p>
              <LiquidButton to="/products">Discover Aura Pure</LiquidButton>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="md:w-1/2 h-[40vh] md:h-[55vh] relative flex justify-center items-center w-full">
            <motion.div animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="h-full w-[80%] md:w-[85%] lg:w-[70%] rounded-[2rem] overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,0.6)] border border-white/20 relative z-20">
              <img src={IMAGES.hero} alt="Premium Water" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-32 bg-white text-[#062B45] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>HYDRATION IN ITS MOST ELEGANT FORM.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">We believe that water isn't just a necessity—it's an experience. Sourced meticulously from deep-rock aquifers, every drop goes through nature's finest filtration system to bring you unmatched crispness and vitality.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
            <img src={IMAGES.brand} alt="Pouring pure water" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-[#062B45] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#031A2B] opacity-90" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>EVERY DROP MATTERS.</h2>
          </div>
          <div className="relative border-l border-[#C7D6DF]/20 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between space-y-12 md:space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} className="relative pl-8 md:pl-0 md:w-1/4 md:px-6 md:text-center z-10 group">
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 w-[10px] h-[10px] bg-[#DDF5FC] rounded-full shadow-[0_0_20px_#DDF5FC]" />
                <div className="md:pt-16 md:pb-16 flex flex-col items-start md:items-center">
                  <span className="text-[#075985] text-5xl font-black mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{step.num}</span>
                  <h3 className="text-xl font-bold mb-4 tracking-wider">{step.title}</h3>
                  <p className="text-[#C7D6DF] font-light text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE PREVIEW */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#031A2B]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IMAGES.lifestyle})`, backgroundAttachment: 'fixed' }} />
        <div className="absolute inset-0 bg-[#062B45]/60 mix-blend-multiply" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>MAKE EVERY MOMENT<br />REFRESHING.</h2>
          <LiquidButton to="/lifestyle">Explore The Lifestyle</LiquidButton>
        </motion.div>
      </section>
    </>
  );
}