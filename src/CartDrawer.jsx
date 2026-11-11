import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose }) {
  // Mock cart data for the premium preview
  const cartItems = [
    {
      id: '03',
      name: 'PURE GLASS',
      size: '750ml',
      price: 8.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1661200670371-ad6f0c048b63?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: '01',
      name: 'MINI BOTTLE',
      size: '330ml',
      price: 2.00,
      quantity: 1,
      image: "https://plus.unsplash.com/premium_photo-1681284939219-acfc2faa7eb8?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#031A2B]/60 backdrop-blur-sm z-[60]"
          />

          {/* Sliding Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Cart Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-[#F8FAFC]">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-[#062B45]" size={24} />
                <h2 className="text-xl font-bold text-[#062B45]" style={{ fontFamily: 'Sora, sans-serif' }}>YOUR CART</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white rounded-full text-gray-400 hover:text-[#062B45] hover:bg-gray-50 transition-all shadow-sm border border-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="w-20 h-24 bg-[#F8FAFC] rounded-xl overflow-hidden flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.image} alt={item.name} className="h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-[#062B45] text-sm">{item.name}</h3>
                        <p className="text-gray-400 text-xs font-light">{item.size}</p>
                      </div>
                      <p className="font-bold text-[#075985]">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button className="px-3 py-1 text-gray-500 hover:text-[#062B45] hover:bg-gray-50 transition-colors">-</button>
                        <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                        <button className="px-3 py-1 text-gray-500 hover:text-[#062B45] hover:bg-gray-50 transition-colors">+</button>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer / Checkout */}
            <div className="p-6 bg-[#F8FAFC] border-t border-gray-100 space-y-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500 font-light">Subtotal</span>
                <span className="font-bold text-[#062B45]">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400 font-light text-center mb-4">Shipping & taxes calculated at checkout.</p>
              
              <button className="w-full bg-[#062B45] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center space-x-2 hover:bg-[#075985] transition-all shadow-lg hover:shadow-xl">
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}