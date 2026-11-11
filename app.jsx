import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplet, ChevronRight, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

// --- CONFIGURATION & DESIGN SYSTEM ---
const COLORS = {
  primary: '#062B45', // Deep Ocean Blue
  secondary: '#075985', // Ocean Blue
  ice: '#DDF5FC', // Ice Blue
  white: '#FFFFFF',
  silver: '#C7D6DF',
  navy: '#031A2B' // Dark Navy
};

const PRODUCTS = [
  { id: '01', name: 'AQUORA MINI', size: '330ml', desc: 'Perfect for quick refreshment on the go.', delay: 0.1 },
  { id: '02', name: 'AQUORA CLASSIC', size: '500ml', desc: 'The everyday essential for hydration.', delay: 0.2 },
  { id: '03', name: 'AQUORA PURE', size: '750ml', desc: 'Elegant glass design for the dining table.', delay: 0.3 },
  { id: '04', name: 'AQUORA FAMILY', size: '1.5L', desc: 'Generous volume for sharing pure moments.', delay: 0.4 },
];

const PROCESS_STEPS = [
  { num: '01', title: 'WATER SOURCING', desc: 'Sourced from pristine, protected natural environments ensuring an untouched beginning.' },
  { num: '02', title: 'FILTRATION', desc: 'Refined through multiple layers of natural elements to achieve perfect clarity.' },
  { num: '03', title: 'QUALITY CONTROL', desc: 'Rigorous testing to maintain our signature crisp taste and perfect mineral balance.' },
  { num: '04', title: 'PACKAGING', desc: 'Sealed in premium, sustainable materials to lock in freshness until the moment you open it.' },
];

// --- COMPONENTS ---

// 1. Navigation
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#031A2B]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-white text-2xl tracking-[0.2em] font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>
          AQUORA<span className="text-[#DDF5FC]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[#C7D6DF]">
          {['Home', 'Our Story', 'Products', 'Process'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        <button className="hidden md:block border border-[#C7D6DF]/30 text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-[#062B45] transition-all duration-300">
          Explore Products
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#031A2B] flex flex-col items-center py-8 space-y-6 shadow-2xl md:hidden"
          >
            {['Home', 'Our Story', 'Products', 'Process', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white text-lg uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// 2. Hero Experience (Simulated 3D)
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full bg-[#062B45] overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#031A2B] z-0" />
      <motion.div style={{ y: y1, opacity }} className="absolute w-[800px] h-[800px] bg-[#075985] rounded-full blur-[150px] opacity-30 top-1/4 left-1/4 mix-blend-screen" />
      
      {/* Animated Particles / Water Drops */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#DDF5FC] rounded-full blur-[2px] opacity-40"
          initial={{ y: '100vh', x: `${Math.random() * 100}vw` }}
          animate={{ y: '-10vh', x: `${(Math.random() - 0.5) * 50 + 50}vw` }}
          transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/2 text-left z-20 mt-20 md:mt-0"
        >
          <motion.div style={{ y: y2 }} className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
              PURE WATER.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDF5FC] to-white">PURE PERFECTION.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#C7D6DF] mb-10 max-w-md font-light leading-relaxed">
              Discover a refreshing experience inspired by nature and designed for everyday living.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-[#062B45] px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-[#DDF5FC] transition-colors duration-300">
                Discover AQUORA
              </button>
              <button className="flex items-center text-white space-x-2 uppercase tracking-widest text-sm hover:text-[#DDF5FC] transition-colors duration-300">
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Bottle Presentation Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="md:w-1/2 h-[60vh] md:h-[80vh] relative mt-12 md:mt-0 flex justify-center items-center"
        >
          {/* INSTRUCTION: Replace the src below with one of the sleek bottle images you provided (e.g., Eira, Realm, or Vellamo) */}
          <motion.img 
            animate={{ y: [-15, 15, -15], rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1604561070543-c0d2ebfbceb4?q=80&w=1000&auto=format&fit=crop" 
            alt="AQUORA Premium Bottle" 
            className="h-[110%] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] z-20 relative mix-blend-luminosity brightness-150 contrast-125"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
          />
          {/* Subtle light reflection behind bottle */}
          <div className="absolute w-[200px] h-[500px] bg-white opacity-10 blur-[60px] transform rotate-12 z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

// 3. Brand Introduction
const BrandIntro = () => {
  return (
    <section id="our-story" className="py-32 bg-white text-[#062B45] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
              MORE THAN JUST WATER.
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              At AQUORA, we believe that every refreshing moment begins with quality. Our brand represents simplicity, freshness and a commitment to making drinking water part of a better everyday experience.
            </p>
            
            <div className="space-y-8">
              {[
                { num: '01', title: 'Purity', desc: 'Untouched by modern impurities.' },
                { num: '02', title: 'Quality', desc: 'Rigorous standards in every drop.' },
                { num: '03', title: 'Refreshment', desc: 'Designed to revitalize your body.' }
              ].map((item, i) => (
                <motion.div 
                  key={item.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="flex items-start border-t border-gray-200 pt-6"
                >
                  <span className="text-[#075985] text-xl font-bold mr-6">{item.num} —</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
             {/* INSTRUCTION: Replace with luxury lifestyle/water photography */}
            <img 
              src="https://images.unsplash.com/photo-1546379753-ebb7d32386a6?q=80&w=2000&auto=format&fit=crop" 
              alt="Pouring pure water" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 4. Product Showcase
const ProductShowcase = () => {
  return (
    <section id="products" className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#062B45] mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            MEET YOUR EVERYDAY REFRESHMENT.
          </motion.h2>
          <div className="w-24 h-1 bg-[#075985] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prod.delay, duration: 0.6 }}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-6 text-[#C7D6DF] font-bold text-xl font-serif z-10">
                {prod.size}
              </div>
              
              <div className="h-64 w-full relative mb-8 flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#DDF5FC]/0 via-[#DDF5FC]/20 to-[#DDF5FC]/50 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
                
                {/* INSTRUCTION: Use product bottle variations here */}
                <motion.img 
                  src="https://images.unsplash.com/photo-1622484211148-7140f0c0594a?q=80&w=800&auto=format&fit=crop" 
                  alt={prod.name}
                  className="h-[120%] w-auto object-contain relative z-20 group-hover:scale-110 transition-transform duration-500 brightness-110 contrast-125 mix-blend-multiply"
                />
              </div>

              <div className="relative z-20 text-center">
                <h3 className="text-xl font-bold text-[#062B45] mb-3 tracking-wide">{prod.name}</h3>
                <p className="text-gray-500 text-sm font-light mb-6">{prod.desc}</p>
                <div className="inline-flex items-center text-[#075985] font-semibold text-sm uppercase tracking-wider group-hover:text-[#062B45]">
                  <span>View Details</span>
                  <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. The Purity Experience
const PurityProcess = () => {
  return (
    <section className="py-32 bg-[#062B45] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
            EVERY DROP MATTERS.
          </h2>
          <p className="text-[#C7D6DF] max-w-2xl mx-auto font-light">
            Our commitment to purity is reflected in every step of our process.
          </p>
        </div>

        <div className="relative border-l border-[#C7D6DF]/20 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between space-y-12 md:space-y-0">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#C7D6DF]/20 -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 md:pl-0 md:w-1/4 md:px-6 md:text-center z-10 group"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-[10px] h-[10px] bg-[#DDF5FC] rounded-full shadow-[0_0_15px_#DDF5FC] group-hover:scale-150 transition-transform duration-300" />
              
              <div className="md:pt-16 md:pb-16 flex flex-col items-start md:items-center">
                <span className="text-[#075985] text-5xl font-black mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{step.num}</span>
                <h3 className="text-xl font-bold mb-4 tracking-wider">{step.title}</h3>
                <p className="text-[#C7D6DF] font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. Lifestyle Experience
const Lifestyle = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* INSTRUCTION: Large editorial photography here */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=2000&auto=format&fit=crop")', backgroundAttachment: 'fixed' }}
      />
      <div className="absolute inset-0 bg-[#062B45]/40 mix-blend-multiply" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
          MAKE EVERY MOMENT<br />REFRESHING.
        </h2>
        <button className="mt-8 border border-white backdrop-blur-sm bg-white/10 px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white hover:text-[#062B45] transition-all duration-300">
          Discover The Lifestyle
        </button>
      </motion.div>
    </section>
  );
};

// 8. Distribution (Contact)
const Distribution = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B45] mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              GOOD WATER.<br/>CLOSER TO YOU.
            </h2>
            <p className="text-gray-600 mb-10 font-light text-lg">
              Interested in becoming a distributor or stocking AQUORA in your establishment? Partner with us to bring premium refreshment to your customers.
            </p>
            
            <div className="space-y-6 text-[#062B45]">
              <div>
                <h4 className="font-bold text-lg">Retailer Enquiries</h4>
                <p className="font-light text-gray-500">retail@aquorawater.com</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Wholesale Partnerships</h4>
                <p className="font-light text-gray-500">wholesale@aquorawater.com</p>
              </div>
            </div>
          </div>

          <form className="bg-[#F8FAFC] p-8 rounded-3xl shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold text-[#062B45] mb-8">Become an AQUORA Partner</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-[#075985] outline-none shadow-sm" />
                <input type="text" placeholder="Business Name" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-[#075985] outline-none shadow-sm" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email Address" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-[#075985] outline-none shadow-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-[#075985] outline-none shadow-sm" />
              </div>
              <select className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-[#075985] outline-none shadow-sm text-gray-500">
                <option value="">Select Enquiry Type</option>
                <option value="retail">Retail Distribution</option>
                <option value="wholesale">Wholesale / Hospitality</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Your Message" rows={4} className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-[#075985] outline-none shadow-sm resize-none"></textarea>
              <button className="w-full bg-[#062B45] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#075985] transition-colors shadow-lg">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// 10. Footer
const Footer = () => {
  return (
    <footer className="bg-[#031A2B] text-[#C7D6DF] py-20 border-t border-[#062B45]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-white text-3xl tracking-[0.2em] font-bold mb-4 block" style={{ fontFamily: 'Sora, sans-serif' }}>
              AQUORA<span className="text-[#DDF5FC]">.</span>
            </a>
            <p className="font-light text-sm max-w-xs">Pure Water. Pure Life. Nature's purity, perfected for you.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Explore</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Products</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aquora Mini</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aquora Classic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aquora Pure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aquora Family</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#C7D6DF]/30 flex items-center justify-center hover:bg-white hover:text-[#062B45] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#C7D6DF]/30 flex items-center justify-center hover:bg-white hover:text-[#062B45] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#C7D6DF]/30 flex items-center justify-center hover:bg-white hover:text-[#062B45] transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#C7D6DF]/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-[#C7D6DF]/60">
          <p>&copy; {new Date().getFullYear()} AQUORA. Fictional Demonstration Brand.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] text-[#C7D6DF]/40 uppercase tracking-[0.2em]">
          Designed and developed by BIGnateX
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#DDF5FC] selection:text-[#062B45]">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <ProductShowcase />
        <PurityProcess />
        <Lifestyle />
        <Distribution />
      </main>
      <Footer />
    </div>
  );
}