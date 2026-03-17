const BackgroundCanvas = () => (
  <div className="fixed inset-0 -z-10">
    <div
      className="absolute inset-0 animate-gradient"
      style={{
        background:
          "linear-gradient(135deg, hsl(222 47% 5%), hsl(220 40% 8%), hsl(217 50% 10%), hsl(222 47% 5%))",
        backgroundSize: "400% 400%",
      }}
    />
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, hsl(217 91% 60% / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(200 80% 70% / 0.06) 0%, transparent 60%)",
      }}
    />
  </div>
);

export default BackgroundCanvas;
