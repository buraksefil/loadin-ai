import { Heart, Users, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const communities = [
  { name: "health.loadin", emoji: "💪" },
  { name: "career.loadin", emoji: "🚀" },
  { name: "relationship.loadin", emoji: "❤️" },
];

const extras = [
  { icon: Users, label: "Peer motivation" },
  { icon: Heart, label: "Success stories" },
  { icon: Calendar, label: 'LOADED events' },
];

const CommunitySection = () => (
  <section id="community" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Community</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          You're not alone
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Join themed communities and grow together.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        {communities.map((c, i) => (
          <AnimatedSection key={c.name} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-6 text-center hover:scale-[1.03] transition-transform duration-300">
              <span className="text-3xl mb-3 block">{c.emoji}</span>
              <span className="font-semibold text-sm">{c.name}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {extras.map((e, i) => (
          <AnimatedSection key={e.label} delay={0.3 + i * 0.1}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <e.icon className="w-4 h-4 text-primary" />
              {e.label}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
