import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Set your goal", desc: "Define what matters most to you." },
  { num: "02", title: "Get your personalized plan", desc: "AI creates your roadmap to success." },
  { num: "03", title: "Stay consistent with AI check-ins", desc: "Daily nudges to keep you on track." },
  { num: "04", title: "Achieve and level up", desc: "Celebrate wins, set bigger goals." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">How It Works</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Four steps to your best self
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.12}>
            <div className="relative">
              <span className="text-6xl font-bold text-primary/10">{s.num}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
