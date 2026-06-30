import Hero from "@/components/Hero";
import FeaturedCatalog from "@/components/FeaturedCatalog";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCatalog />
      <About />
      <Testimonials />
      <FAQ />
    </main>
  );
}
