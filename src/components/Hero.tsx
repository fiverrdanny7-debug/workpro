import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-light via-white to-ice/20 pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ice/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-white/40 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-secondary">AI-Formulated Skincare</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-secondary leading-[1.1] mb-6 tracking-tight">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Beauty</span> Starts Here
            </h1>
            
            <p className="text-lg md:text-xl text-secondary/70 mb-8 max-w-lg font-sans leading-relaxed">
              Science-powered cosmetics designed to transform your skin. Experience the next generation of luxury beauty-tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-primary rounded-full overflow-hidden shadow-glow transition-transform hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 font-medium text-secondary bg-white border border-white/40 rounded-full hover:bg-neutral-light transition-colors shadow-sm glass">
                <Play className="w-5 h-5 mr-2 text-primary" /> See Results
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div className="text-sm font-medium text-secondary/80">
                <span className="text-primary font-bold">4.9/5</span> from 10,000+ reviews
              </div>
            </div>
          </motion.div>

          {/* 3D Visual Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Simulated 3D Bottle */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative w-64 h-96 z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md border border-white/30 rounded-3xl shadow-[0_0_50px_rgba(28,108,255,0.3)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-ice/30 mix-blend-overlay" />
                <div className="w-3/4 h-3/4 bg-gradient-to-b from-primary to-secondary rounded-2xl blur-sm opacity-90 relative">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/400/600')] opacity-30 mix-blend-overlay rounded-2xl" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-heading font-bold tracking-widest text-xl text-glow">
                  PROWOK
                </div>
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] border border-primary/20 rounded-full border-dashed z-10"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] border border-ice/30 rounded-full z-10"
            />
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-20 right-10 glass px-4 py-2 rounded-xl z-30 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-secondary">Clinically Proven</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute bottom-32 left-0 glass px-4 py-2 rounded-xl z-30 flex items-center gap-2"
            >
              <span className="text-xl">✨</span>
              <span className="text-xs font-bold text-secondary">+94% Hydration</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
