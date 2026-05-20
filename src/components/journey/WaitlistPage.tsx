import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Instagram } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Props {
  answers: Record<string, string>;
  onRestart: () => void;
}

const WaitlistPage = ({ answers, onRestart }: Props) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: answers.goal || "",
    blocker: answers.struggle || answers.blocker || "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setLoading(true);
    setError("");

    const { error } = await supabase.from("waitlist").insert([
      {
        name: form.name,
        email: form.email,
        goal: form.goal,
        blocker: form.blocker,
      },
    ]);

    setLoading(false);

    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setSubmitted(true);
    }
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const fieldClass =
    "bg-secondary/50 border-border/50 rounded-xl placeholder:text-muted-foreground/50 focus-visible:ring-primary/30";

  return (
    <motion.div
      className="min-h-screen w-screen flex items-start justify-center px-6 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-md w-full py-12">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4"
          >
            <CheckCircle className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl font-bold text-gradient">You're in.</h2>
            <p className="text-muted-foreground">
              We'll reach out soon. The journey begins.
            </p>
            <Button
              onClick={() => window.open("https://instagram.com/loadin.community", "_blank")}
              className="mt-2 h-11 px-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white border-0 hover:opacity-90 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Instagram className="w-4 h-4" />
              Follow us on Instagram
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              className="mt-2 h-11 px-8 rounded-full border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
            >
              Back to start
            </Button>
          </motion.div>

        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-gradient">
                We're building something big.
              </h2>
              <p className="text-muted-foreground text-lg text-center">
                If you want to be part of the community,<br />
                it's free — forever.<br />
                Stay close.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
                className={`h-12 ${fieldClass}`}
              />
              <Input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
                className={`h-12 ${fieldClass}`}
              />
              <Input
                placeholder="What is your goal?"
                value={form.goal}
                onChange={(e) => update("goal", e.target.value)}
                className={`h-12 ${fieldClass}`}
              />
              <Textarea
                placeholder="What is holding you back?"
                value={form.blocker}
                onChange={(e) => update("blocker", e.target.value)}
                className={`min-h-[80px] ${fieldClass}`}
              />

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl text-base bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                {loading ? "Saving..." : "Join the early access"}
              </Button>

              <div className="flex items-center justify-center gap-2 pt-1">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => window.open("https://instagram.com/loadin.community", "_blank")}
                  className="h-9 px-4 rounded-full text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </Button>
              </div>

              <p className="text-center text-xs text-muted-foreground/60">
                Help us build this better
              </p>
            </motion.form>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default WaitlistPage;