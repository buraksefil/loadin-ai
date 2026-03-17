import { Target, CalendarCheck, Bell, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: Target, label: "Personalized goal setting" },
  { icon: CalendarCheck, label: "Daily action plans" },
  { icon: Bell, label: "Smart reminders & check-ins" },
  { icon: Sparkles, label: "Feels like a real coach, not an app" },
];

const SolutionSection = () => (
  <section id="solution" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Meet your AI Coach
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Loadin.ai combines AI coaching with discipline systems and mindset
            training to help you achieve your goals.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid gap-4">
            {features.map((f, i) => (
              <div
                key={f.label}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SolutionSection;
