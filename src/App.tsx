/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { ProductShowcase } from "./components/ProductShowcase";
import { BeforeAfter } from "./components/BeforeAfter";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { WhyProwok } from "./components/WhyProwok";
import { SocialProof } from "./components/SocialProof";
import { LimitedOffer } from "./components/LimitedOffer";
import { Footer } from "./components/Footer";
import { StickyCart } from "./components/StickyCart";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-light font-sans text-secondary selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <BeforeAfter />
        <FeaturedProducts />
        <WhyProwok />
        <SocialProof />
        <LimitedOffer />
      </main>
      <Footer />
      <StickyCart />
    </div>
  );
}
