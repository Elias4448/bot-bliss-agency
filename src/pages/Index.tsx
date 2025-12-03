import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PhoneDemo } from "@/components/PhoneDemo";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { DotGrid } from "@/components/DotGrid";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <DotGrid />
      <Navigation />
      <main>
        <Hero />
        <div id="leistungen">
          <Services />
        </div>
        <PhoneDemo />
        <div id="vorteile">
          <Benefits />
        </div>
        <div id="prozess">
          <Process />
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
