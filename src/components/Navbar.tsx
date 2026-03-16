import { motion } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-heading font-bold text-2xl tracking-tighter text-primary">PROWOK</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#shop" className="text-secondary hover:text-primary transition-colors font-medium">Shop</a>
            <a href="#results" className="text-secondary hover:text-primary transition-colors font-medium">Results</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors font-medium">About</a>
            <a href="#blog" className="text-secondary hover:text-primary transition-colors font-medium">Blog</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-secondary hover:text-primary transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-glow">
              Shop Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#shop" className="block px-3 py-2 text-secondary font-medium">Shop</a>
            <a href="#results" className="block px-3 py-2 text-secondary font-medium">Results</a>
            <a href="#about" className="block px-3 py-2 text-secondary font-medium">About</a>
            <a href="#blog" className="block px-3 py-2 text-secondary font-medium">Blog</a>
            <button className="w-full mt-4 bg-primary text-white px-6 py-3 rounded-full font-medium shadow-glow">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
