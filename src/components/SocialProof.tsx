import { motion } from "motion/react";
import { Instagram, Star } from "lucide-react";

const reviews = [
  {
    name: "Elena R.",
    handle: "@elena_glows",
    text: "Obsessed with the Luminous Serum! My skin has never felt this hydrated and bouncy. The 3D texture is unreal. ✨",
    rating: 5,
    image: "https://picsum.photos/seed/user1/150/150",
    post: "https://picsum.photos/seed/post1/400/400"
  },
  {
    name: "Sophia M.",
    handle: "@sophiabeauty",
    text: "Finally, a luxury brand that actually delivers on its promises. The AI formulation is a game changer for my sensitive skin.",
    rating: 5,
    image: "https://picsum.photos/seed/user2/150/150",
    post: "https://picsum.photos/seed/post2/400/400"
  },
  {
    name: "Chloe T.",
    handle: "@chloeskin",
    text: "The Cellular Repair Cream is my holy grail. I saw a noticeable difference in my fine lines within two weeks. Highly recommend!",
    rating: 5,
    image: "https://picsum.photos/seed/user3/150/150",
    post: "https://picsum.photos/seed/post3/400/400"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-neutral-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Loved by Thousands
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto text-lg">
            Join the PROWOK community and share your glow. Tag us on Instagram to be featured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-glass transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={review.post} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm">
                  <Instagram className="w-5 h-5 text-pink-500" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-primary/20" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-secondary">{review.name}</h4>
                    <p className="text-sm text-secondary/60">{review.handle}</p>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-secondary/80 italic text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
