import Hero from "@/components/Hero";
import FeaturedStrip from "@/components/FeaturedStrip";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedStrip />
      <Services />
      <Testimonial />
      <CTASection />
    </>
  );
}
