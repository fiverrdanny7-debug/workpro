import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Beaker, Leaf } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Glow Skin",
    description: "Visible radiance in 7 days."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Dermatologist Tested",
    description: "Safe for sensitive skin types."
  },
  {
    icon: <Beaker className="w-8 h-8 text-primary" />,
    title: "Clinically Proven",
    description: "Backed by 10+ years of research."
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Vegan & Cruelty Free",
    description: "Ethically sourced ingredients."
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Formulated for Perfection
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            Our proprietary blend of active ingredients works at the cellular level to restore, protect, and enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-neutral-light border border-white/50 shadow-sm hover:shadow-glass transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-2 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-secondary/70 relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
