import FeaturesSection from "@/component/landingpage/FeaturesSection";
import HeroSection from "@/component/landingpage/heroSection";
import Navbar from "@/component/landingpage/Navbar";
import PriceSection from "@/component/landingpage/PricingSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
      <section>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <PriceSection />
      </section>
    </div>
  );
}
