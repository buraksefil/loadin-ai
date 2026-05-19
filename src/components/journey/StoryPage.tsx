import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  onComplete: () => void;
}

const lines = [
  { text: "So... what is Loadin.ai?", style: "text-3xl md:text-5xl font-bold text-gradient", delay: 0 },
  { text: "It's not just another app.", style: "text-xl md:text-2xl text-muted-foreground", delay: 2 },
  { text: "It's a system.", style: "text-xl md:text-2xl text-foreground font-medium", delay: 3.5 },
  { text: "A system that stays with you.", style: "text-lg md:text-xl text-muted-foreground", delay: 5 },
  { text: "That reminds you.", style: "text-lg md:text-xl text-muted-foreground", delay: 6 },
  { text: "That pushes you.", style: "text-lg md:text-xl text-muted-foreground", delay: 7 },
  { text: "That doesn't let you quit.", style: "text-lg md:text-xl text-foreground font-semibold", delay: 8.2 },
];

const lines2 = [
  { text: "AI meets discipline.", style: "text-2xl md:text-3xl text-gradient font-bold", delay: 0 },
  { text: "Goals meet execution.", style: "text-2xl md:text-3xl text-gradient font-bold", delay: 1.5 },
  { text: "And you... finally follow through.", style: "text-xl md:text-2xl text-foreground font-medium", delay: 3 },
];

const StoryPage = ({ onComplete }: Props) => {
  const [phase, setPhase] = useState<1 | 2>(1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 10500);
    return () => { clearTimeout(t1); };
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
          lines.map((line, i) => (
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
              transition={{ delay: 4.5, duration: 0.6, ease: "easeOut" }}
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
