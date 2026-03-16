import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function WhyProwok() {
  const reasons = [
    "AI-Formulated for your specific skin type",
    "Dermatologist tested & approved",
    "Premium, ethically sourced ingredients",
    "Sustainable, recyclable packaging",
    "Cruelty-free & Vegan certified",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract/1920/1080')] opacity-10 mix-blend-overlay" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-dark border-white/10"
          >
            <img 
              src="https://picsum.photos/seed/lab/800/1000" 
              alt="Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-10">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Science Meets Beauty</h3>
              <p className="text-ice/80 text-lg max-w-md">
                We utilize advanced AI algorithms to analyze thousands of ingredient combinations, finding the perfect synergy for optimal skin health.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
                Why Choose PROWOK?
              </h2>
              <p className="text-ice/80 text-lg leading-relaxed">
                We don't just make cosmetics; we engineer skincare solutions. Our commitment to innovation, purity, and results sets us apart in the luxury beauty space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-ice font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-secondary px-8 py-4 rounded-full font-bold hover:bg-ice transition-colors shadow-glow mt-8">
              Discover Our Story
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
