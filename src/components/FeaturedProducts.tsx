import { motion } from "motion/react";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Luminous Serum",
    price: "$120",
    rating: 4.9,
    reviews: 1240,
    image: "https://picsum.photos/seed/product1/400/500",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Cellular Repair Cream",
    price: "$145",
    rating: 4.8,
    reviews: 890,
    image: "https://picsum.photos/seed/product2/400/500",
    tag: "New"
  },
  {
    id: 3,
    name: "Hydration Essence",
    price: "$85",
    rating: 4.7,
    reviews: 560,
    image: "https://picsum.photos/seed/product3/400/500"
  },
  {
    id: 4,
    name: "Eye Lift Complex",
    price: "$110",
    rating: 4.9,
    reviews: 2100,
    image: "https://picsum.photos/seed/product4/400/500"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4">
              Curated For You
            </h2>
            <p className="text-secondary/70 max-w-xl text-lg">
              Discover our most loved formulas, engineered for maximum efficacy and unparalleled luxury.
            </p>
          </div>
          <button className="hidden md:block text-primary font-bold hover:text-primary-hover transition-colors">
            View All Products &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-neutral-light rounded-3xl p-4 transition-all duration-300 hover:shadow-glass hover:-translate-y-2"
            >
              {product.tag && (
                <div className="absolute top-6 left-6 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.tag}
                </div>
              )}
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-white">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                
                {/* 3D Hover Overlay Simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-white/90 backdrop-blur-sm text-secondary font-bold py-3 px-8 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-primary hover:text-white">
                    <ShoppingCart className="w-4 h-4" /> Quick Add
                  </button>
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading font-bold text-secondary">{product.name}</h3>
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-secondary/70">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 font-bold text-secondary">{product.rating}</span>
                  </div>
                  <span>({product.reviews})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="text-primary font-bold hover:text-primary-hover transition-colors">
            View All Products &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
