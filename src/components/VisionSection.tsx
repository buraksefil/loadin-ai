import AnimatedSection from "./AnimatedSection";

const VisionSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <AnimatedSection>
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Vision</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          More than an app — a <span className="text-gradient">movement</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We are building a global community of people who take control of their
          lives, stay disciplined, and achieve their goals with AI.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default VisionSection;
