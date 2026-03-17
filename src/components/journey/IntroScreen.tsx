import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: Props) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 3000);
    const t3 = setTimeout(() => onComplete(), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const texts = ["Initializing...", "Preparing your experience...", ""];

  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        key={phase}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-muted-foreground text-lg tracking-widest font-light"
      >
        {texts[phase]}
      </motion.p>
    </motion.div>
  );
};

export default IntroScreen;
