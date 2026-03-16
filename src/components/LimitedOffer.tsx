import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";

export function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Offer Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-glow"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
            
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-8 border border-white/30">
              <Clock className="w-4 h-4 animate-pulse" /> Flash Sale
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Today Only – 25% OFF
            </h2>
            <p className="text-ice/90 text-lg mb-10 max-w-md">
              Experience the future of beauty at a fraction of the cost. Stock up on your favorites before the timer runs out.
            </p>
            
            <div className="flex gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-24 text-center">
                <div className="text-3xl font-heading font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-ice/80 uppercase tracking-wider mt-1">Hours</div>
              </div>
              <div className="text-3xl font-bold self-center">:</div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-24 text-center">
                <div className="text-3xl font-heading font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-ice/80 uppercase tracking-wider mt-1">Mins</div>
              </div>
              <div className="text-3xl font-bold self-center">:</div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-24 text-center">
                <div className="text-3xl font-heading font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-ice/80 uppercase tracking-wider mt-1">Secs</div>
              </div>
            </div>
            
            <button className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-ice transition-colors shadow-lg flex items-center justify-center gap-2 group">
              Claim Offer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Email Capture */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 md:p-16 bg-neutral-light rounded-3xl border border-white/50 shadow-sm"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-3xl">💌</span>
            </div>
            
            <h3 className="text-3xl font-heading font-bold text-secondary mb-4">
              Join the Inner Circle
            </h3>
            <p className="text-secondary/70 text-lg mb-8">
              Subscribe to receive exclusive access to new launches, AI skincare tips, and 15% off your first order.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white border border-secondary/10 rounded-full px-6 py-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent shadow-sm"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-full font-bold hover:bg-primary-hover transition-colors shadow-glow"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-secondary/50 text-center mt-4">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
