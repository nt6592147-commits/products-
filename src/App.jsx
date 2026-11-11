import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Import your newly created pages
import Home from './Home';
import Products from './Products';
import Lifestyle from './Lifestyle';

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Gets the current URL path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#031A2B]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl tracking-[0.2em] font-bold flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
          <Droplet className="text-[#DDF5FC]" size={24} fill="currentColor" />
          AURA PURE<span className="text-[#DDF5FC]">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[#C7D6DF]">
          <Link to="/" className={`hover:text-white transition-colors duration-300 ${isActive('/') ? 'text-white font-bold' : ''}`}>Home</Link>
          <Link to="/products" className={`hover:text-white transition-colors duration-300 ${isActive('/products') ? 'text-white font-bold' : ''}`}>Products</Link>
          <Link to="/lifestyle" className={`hover:text-white transition-colors duration-300 ${isActive('/lifestyle') ? 'text-white font-bold' : ''}`}>Lifestyle</Link>
        </div>

        <Link to="/products" className="hidden md:block border border-[#C7D6DF]/30 text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-[#062B45] transition-all duration-300 shadow-[0_0_15px_rgba(221,245,252,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          Shop Now
        </Link>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-[#031A2B]/95 backdrop-blur-lg flex flex-col items-center py-8 space-y-6 shadow-2xl md:hidden border-b border-white/10">
            <Link to="/" className="text-white text-lg uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="text-white text-lg uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/lifestyle" className="text-white text-lg uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>Lifestyle</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- FOOTER COMPONENT ---
const Footer = () => (
  <footer className="bg-[#031A2B] text-[#C7D6DF] py-20 border-t border-[#062B45]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-white text-3xl tracking-[0.2em] font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
            <Droplet className="text-[#DDF5FC]" size={24} fill="currentColor" /> AURA PURE<span className="text-[#DDF5FC]">.</span>
          </Link>
          <p className="font-light text-sm max-w-xs leading-relaxed mt-4">Pure Water. Pure Life. Nature's purity, perfected for you.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Explore</h4>
          <ul className="space-y-4 font-light text-sm flex flex-col items-start">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <Link to="/lifestyle" className="hover:text-white transition-colors">Lifestyle</Link>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Products</h4>
          <ul className="space-y-4 font-light text-sm flex flex-col items-start">
            <Link to="/products" className="hover:text-white transition-colors">Mini Bottle</Link>
            <Link to="/products" className="hover:text-white transition-colors">Classic Bottle</Link>
            <Link to="/products" className="hover:text-white transition-colors">Family Bottle</Link>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-[#C7D6DF]/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-[#C7D6DF]/60">
        <p>&copy; {new Date().getFullYear()} AURA PURE. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// --- SCROLL TO TOP HELPER ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Always snap to top when clicking a new page link
  }, [pathname]);
  return null;
}

// --- MAIN APP ---
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#DDF5FC] selection:text-[#062B45]">
        <Navbar />
        
        {/* React Router handles which page to show here! */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}