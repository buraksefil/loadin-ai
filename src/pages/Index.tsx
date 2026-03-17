import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PhilosophySection from "@/components/PhilosophySection";
import CommunitySection from "@/components/CommunitySection";
import VisionSection from "@/components/VisionSection";
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <PhilosophySection />
    <CommunitySection />
    <VisionSection />
    <WaitlistSection />
    <FooterSection />
  </div>
);

export default Index;
