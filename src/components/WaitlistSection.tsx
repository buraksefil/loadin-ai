import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Start your journey today
          </h2>
          <p className="text-muted-foreground mb-10">
            Be part of the first users shaping the future of AI coaching.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-primary font-medium">
              <CheckCircle className="w-5 h-5" />
              You're on the list! We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-full px-6 flex-1"
              />
              <Button type="submit" size="lg" className="h-12 rounded-full px-8">
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WaitlistSection;
