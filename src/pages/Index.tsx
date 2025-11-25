import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Navigation />
      <main>
        <Hero />
        <div id="leistungen">
          <Services />
        </div>
        <div id="vorteile">
          <Benefits />
        </div>
        <div id="kontakt">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
