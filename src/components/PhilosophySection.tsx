import AnimatedSection from "./AnimatedSection";

const PhilosophySection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <AnimatedSection>
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Philosophy</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Law of Attraction + Discipline,{" "}
          <span className="text-gradient">powered by AI</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We believe success is not just about thinking — it's about consistent
          action. Loadin.ai combines mindset and discipline into one system.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PhilosophySection;
