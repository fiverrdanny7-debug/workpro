import { motion } from "motion/react";
import { useState } from "react";
import { Search, Droplets, Sparkles, Zap } from "lucide-react";

export function ProductShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: <Droplets />, title: "Hyaluronic Acid", desc: "Deep hydration layer" },
    { icon: <Sparkles />, title: "Vitamin C", desc: "Brightening complex" },
    { icon: <Zap />, title: "Peptides", desc: "Firming technology" }
  ];

  return (
    <section className="py-32 bg-secondary text-white relative overflow-hidden" id="shop">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/stars/1920/1080')] opacity-5 mix-blend-screen" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            The Anatomy of Perfection
          </h2>
          <p className="text-ice/80 max-w-2xl mx-auto text-lg">
            Explore the science behind our award-winning formula. Interactive 3D visualization of our active ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-8 order-2 lg:order-1">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeFeature === idx ? 'bg-white/10 border border-primary/50 shadow-glow' : 'hover:bg-white/5 border border-transparent'}`}
                onClick={() => setActiveFeature(idx)}
                whileHover={{ x: 10 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${activeFeature === idx ? 'bg-primary text-white' : 'bg-white/10 text-ice'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-ice/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center 3D Model Placeholder */}
          <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center">
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-96 cursor-grab active:cursor-grabbing"
            >
              {/* Simulated 3D Bottle */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_50px_rgba(28,108,255,0.4)] flex items-center justify-center overflow-hidden">
                <div className="w-4/5 h-4/5 bg-gradient-to-b from-primary to-secondary rounded-2xl blur-md opacity-80 relative">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/liquid/400/600')] opacity-40 mix-blend-overlay rounded-2xl" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-bold tracking-widest text-2xl text-glow">
                  PROWOK
                </div>
              </div>
            </motion.div>

            {/* Interactive Hotspots */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#1C6CFF] cursor-pointer"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-ice rounded-full shadow-[0_0_15px_#B7D4FF] cursor-pointer"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Right Info */}
          <div className="order-3 lg:order-3 space-y-8">
            <div className="glass-dark p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 blur-3xl rounded-full" />
              <h3 className="text-2xl font-heading font-bold mb-4">Texture Reveal</h3>
              <p className="text-ice/80 mb-6">
                Experience the lightweight, fast-absorbing serum that leaves no sticky residue.
              </p>
              <div className="h-32 rounded-xl overflow-hidden relative group">
                <img src="https://picsum.photos/seed/texture2/400/200" alt="Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 bg-white text-secondary font-bold rounded-full hover:bg-ice transition-colors shadow-glow">
              View Full Ingredients
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
