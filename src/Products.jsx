import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Leaf } from 'lucide-react';

const PRODUCTS = [
  { id: '01', name: 'MINI BOTTLE', size: '330ml', price: '$2.00', desc: 'Perfect for quick refreshment on the go.', image: "https://plus.unsplash.com/premium_photo-1681284939219-acfc2faa7eb8?w=500&auto=format&fit=crop&q=60" },
  { id: '02', name: 'CLASSIC BOTTLE', size: '500ml', price: '$3.50', desc: 'The everyday essential for hydration.', image: "https://media.istockphoto.com/id/185072125/photo/bottle-of-spring-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=HARoEpT6aopOvxRbWkOEVFjwDSRHqDYvdwmaID2eh5I=" },
  { id: '03', name: 'PURE GLASS', size: '750ml', price: '$8.00', desc: 'Elegant glass design for the dining table.', image: "https://images.unsplash.com/photo-1661200670371-ad6f0c048b63?w=500&auto=format&fit=crop&q=60" },
  { id: '04', name: 'FAMILY BOTTLE', size: '1.5L', price: '$5.00', desc: 'Generous volume for sharing pure moments.', image: "https://images.unsplash.com/photo-1638688569176-5b6db19f9d2a?w=500&auto=format&fit=crop&q=60" },
];

export default function Products() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[70vh] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#062B45]">
        <motion.div style={{ y, backgroundImage: `url(https://images.unsplash.com/photo-1541703673595-d2cbdf18b958?auto=format&fit=crop&w=1920&q=80)` }} className="absolute inset-0 bg-cover bg-center z-0 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062B45] via-[#062B45]/40 to-transparent z-10" />
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>THE AURA PURE<br/>DIFFERENCE.</h1>
          <p className="text-lg md:text-xl text-[#C7D6DF] font-light max-w-2xl mx-auto">From untouched aquifers to your table. Explore our heritage and shop the complete collection.</p>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B45] mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>SHOP THE COLLECTION</h2>
            <div className="w-24 h-1 bg-[#075985] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((prod) => (
              <motion.div key={prod.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
                <div className="h-64 w-full relative mb-8 overflow-hidden rounded-[1.5rem] bg-gray-50 flex items-center justify-center p-4">
                  <img src={prod.image} alt={prod.name} className="h-full w-auto object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-[#062B45] text-white text-xs font-bold px-3 py-1 rounded-full">{prod.size}</div>
                </div>
                <div className="relative z-20 text-center mt-auto">
                  <h3 className="text-xl font-bold text-[#062B45] mb-1">{prod.name}</h3>
                  <p className="text-gray-500 text-sm font-light mb-4 h-10">{prod.desc}</p>
                  <p className="text-[#075985] font-bold text-2xl mb-6">{prod.price}</p>
                  <button className="w-full bg-[#062B45] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#075985] transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart size={18} /> <span>Add to Cart</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-[#062B45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&w=1920&q=80" alt="Nature" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Leaf className="text-[#075985] mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>COMMITTED TO TOMORROW.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">We draw from nature, so it is our duty to protect it. Our classic and mini ranges are packaged in 100% recycled RPET plastics.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}