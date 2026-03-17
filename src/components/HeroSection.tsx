import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBrain from "@/assets/hero-brain.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-16">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(217_91%_60%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(217_91%_60%/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm text-muted-foreground mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              AI Coaching — Coming Soon
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              What's your{" "}
              <span className="text-gradient">goal?</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-md">
              Turn your goals into reality with an AI Coach that keeps you
              disciplined, focused, and accountable — every single day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 h-12 rounded-full" asChild>
                <a href="#waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-12 rounded-full"
                asChild
              >
                <a href="#how-it-works">Start Your Journey</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-110 animate-pulse-glow" />
              <img
                src={heroBrain}
                alt="AI neural network visualization"
                className="w-[480px] h-[480px] object-contain animate-float relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
