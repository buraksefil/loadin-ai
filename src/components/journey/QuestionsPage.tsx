import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  answers: Record<string, string>;
  setAnswers: (a: Record<string, string>) => void;
  onComplete: () => void;
}

type Step = {
  id: string;
  question: string;
  type: "input" | "choice" | "final";
  choices?: string[];
  placeholder?: string;
};

const steps: Step[] = [
  { id: "goal", question: "What is your goal?", type: "input", placeholder: "Type your goal..." },
  { id: "duration", question: "How long have you wanted this?", type: "choice", choices: ["Weeks", "Months", "Years"] },
  { id: "blocker", question: "Why haven't you achieved it yet?", type: "input", placeholder: "Be honest with yourself..." },
  { id: "struggle", question: "What has been your biggest struggle?", type: "input", placeholder: "What keeps holding you back..." },
  { id: "final", question: "You're not alone.", type: "final" },
];

const QuestionsPage = ({ answers, setAnswers, onComplete }: Props) => {
  const [stepIdx, setStepIdx] = useState(0);
  const [currentVal, setCurrentVal] = useState("");
  const step = steps[stepIdx];

  const next = () => {
    if (step.type === "input" && currentVal.trim()) {
      setAnswers({ ...answers, [step.id]: currentVal.trim() });
    }
    if (stepIdx < steps.length - 1) {
      setCurrentVal("");
      setStepIdx(stepIdx + 1);
    } else {
      onComplete();
    }
  };

  const selectChoice = (c: string) => {
    setAnswers({ ...answers, [step.id]: c });
    setTimeout(() => {
      setCurrentVal("");
      setStepIdx(stepIdx + 1);
    }, 400);
  };

  const canContinue = step.type === "final" || step.type === "choice" || currentVal.trim().length > 0;

  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-xl w-full">
        <motion.div
          key={stepIdx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className={`font-semibold tracking-tight mb-10 ${step.type === "final" ? "text-4xl md:text-5xl text-gradient" : "text-2xl md:text-4xl text-foreground"}`}>
            {step.question}
          </h2>

          {step.type === "input" && (
            <div className="mb-8">
              <Input
                value={currentVal}
                onChange={(e) => setCurrentVal(e.target.value)}
                placeholder={step.placeholder}
                onKeyDown={(e) => e.key === "Enter" && canContinue && next()}
                className="h-14 text-lg bg-secondary/50 border-border/50 text-center rounded-2xl placeholder:text-muted-foreground/50 focus-visible:ring-primary/30"
                autoFocus
              />
            </div>
          )}

          {step.type === "choice" && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              {step.choices?.map((c) => (
                <Button
                  key={c}
                  variant={answers[step.id] === c ? "default" : "outline"}
                  onClick={() => selectChoice(c)}
                  className={`h-12 px-8 rounded-full text-base transition-all duration-300 ${
                    answers[step.id] === c
                      ? "bg-primary text-primary-foreground"
                      : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {c}
                </Button>
              ))}
            </div>
          )}

          {step.type !== "choice" && (
            <Button
              onClick={next}
              disabled={!canContinue}
              className="h-12 px-10 rounded-full text-base bg-primary hover:bg-primary/90 disabled:opacity-30 transition-all duration-300"
            >
              {step.type === "final" ? "Continue" : "Next"}
            </Button>
          )}

          {/* Progress dots */}
          <div className="flex gap-2 justify-center mt-12">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === stepIdx ? "w-8 bg-primary" : i < stepIdx ? "w-1.5 bg-primary/40" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuestionsPage;
