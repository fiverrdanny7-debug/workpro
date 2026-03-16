import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export function StickyCart() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full shadow-glass flex items-center gap-6"
    >
      <div className="flex items-center gap-3">
        <img src="https://picsum.photos/seed/product1/50/50" alt="Luminous Serum" className="w-10 h-10 rounded-full border border-white/50" referrerPolicy="no-referrer" />
        <div className="hidden sm:block">
          <div className="text-sm font-bold text-secondary">Luminous Serum</div>
          <div className="text-xs text-secondary/70">$120</div>
        </div>
      </div>
      
      <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-glow hover:bg-primary-hover transition-colors flex items-center gap-2">
        <ShoppingCart className="w-4 h-4" /> Add to Cart
      </button>
    </motion.div>
  );
}
