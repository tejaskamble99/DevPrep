import HeroSection from "@/component/landingpage/heroSection";
import Navbar from "@/component/landingpage/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section>
        <Navbar />
        <HeroSection />
      </section>
    </div>
  );
}
