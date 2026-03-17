import { AlertTriangle, Zap, HeartOff } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: Zap,
    title: "Lack of Discipline",
    description: "Motivation fades. Consistency is hard.",
  },
  {
    icon: AlertTriangle,
    title: "Information Overload",
    description: "Too much content, no clear path.",
  },
  {
    icon: HeartOff,
    title: "No Real Support",
    description: "Apps don't guide or hold you accountable.",
  },
];

const ProblemSection = () => (
  <section id="problem" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">The Problem</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Why most people fail to achieve their goals
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <div className="glass-card rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
