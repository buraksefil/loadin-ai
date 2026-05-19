import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/journey/IntroScreen";
import QuestionsPage from "@/components/journey/QuestionsPage";
import StoryPage from "@/components/journey/StoryPage";
import WaitlistPage from "@/components/journey/WaitlistPage";
import BackgroundCanvas from "@/components/journey/BackgroundCanvas";

const Index = () => {
  const [page, setPage] = useState<"intro" | "questions" | "story" | "waitlist">("intro");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <BackgroundCanvas />
      <AnimatePresence mode="wait">
        {page === "intro" && (
          <IntroScreen key="intro" onComplete={() => setPage("questions")} />
        )}
        {page === "questions" && (
          <QuestionsPage
            key="questions"
            answers={answers}
            setAnswers={setAnswers}
            onComplete={() => setPage("story")}
          />
        )}
        {page === "story" && (
          <StoryPage key="story" onComplete={() => setPage("waitlist")} />
        )}
        {page === "waitlist" && (
          <WaitlistPage key="waitlist" answers={answers} onRestart={() => { setAnswers({}); setPage("intro"); }} />
        )}

      </AnimatePresence>
    </div>
  );
};

export default Index;
