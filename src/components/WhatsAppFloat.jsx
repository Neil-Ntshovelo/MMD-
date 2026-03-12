import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex items-end gap-3">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="relative bg-white text-slate-800 text-sm px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 max-w-[180px] mb-1"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-0.5 transition"
            >
              <X size={11} />
            </button>
            <p className="font-bold text-slate-900 text-xs mb-0.5">Need help?</p>
            <p className="text-slate-500 text-xs leading-snug">Chat with our advisors!</p>
            <div className="absolute bottom-3.5 -right-[7px] border-8 border-transparent border-l-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/27645582706?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 14 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
