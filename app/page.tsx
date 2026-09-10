import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { DifferentiatorSection } from "./components/DifferentiatorSection";
import { DocumentTypesSection } from "./components/DocumentTypesSection";
import { JurisdictionSection } from "./components/JurisdictionSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <DifferentiatorSection />
      <DocumentTypesSection />
      <JurisdictionSection />
      <Footer />
    </main>
  );
}
