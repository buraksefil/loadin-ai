import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onComplete: () => void;
}

const lines1 = [
  { text: "So... what is Loadin.ai?", style: "text-3xl md:text-5xl font-bold text-gradient", delay: 0 },
  { text: "It's not just another app.", style: "text-xl md:text-2xl text-muted-foreground", delay: 2 },
  { text: "It's not just another platform.", style: "text-xl md:text-2xl text-muted-foreground", delay: 3.5 },
  { text: "It's a system.", style: "text-xl md:text-2xl text-foreground font-medium", delay: 5 },
];

const lines2 = [
  { text: "AI improves your power and discipline.", style: "text-2xl md:text-3xl text-gradient font-bold", delay: 0 },
  { text: "Goals meet execution, when you meet the right people.", style: "text-2xl md:text-3xl text-gradient font-bold", delay: 2 },
  { text: "And you... finally follow through.", style: "text-xl md:text-2xl text-foreground font-medium", delay: 3 },
];

const StoryPage = ({ onComplete }: Props) => {
  const [phase, setPhase] = useState<1 | 2>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 8000);
    return () => {
      clearTimeout(t1);
    };
  }, []);

  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl w-full text-center space-y-6">
        {phase === 1 &&
          lines1.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: line.delay, duration: 0.8, ease: "easeOut" }}
              className={line.style}
            >
              {line.text}
            </motion.p>
          ))}

        {phase === 2 && (
          <div className="space-y-6">
            {lines2.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: line.delay, duration: 0.8, ease: "easeOut" }}
                className={line.style}
              >
                {line.text}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 5.5, duration: 0.6, ease: "easeOut" }}
              className="pt-4"
            >
              <Button
                onClick={onComplete}
                className="h-14 px-12 rounded-full text-lg bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                I want this
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StoryPage;