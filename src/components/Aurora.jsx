// A single, very subtle ambient glow sitting low-opacity behind the
// content — atmospheric rather than a "northern lights" effect. No
// cursor tracking, no secondary hues: one soft teal wash that drifts
// slowly and stays out of the way of the Starfield and page content.
export default function Aurora() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 h-[55vh] w-[70vw] rounded-full opacity-[0.07] blur-[130px] animate-drift-slow"
        style={{
          background: "radial-gradient(closest-side, var(--color-teal), transparent 70%)",
        }}
      />
    </div>
  );
}
