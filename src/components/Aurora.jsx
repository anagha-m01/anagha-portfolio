import { useEffect, useRef } from "react";

// Soft, blurred aurora ribbons layered behind the page content. The three
// large blobs drift on their own slow timer for ambience; the smaller glow
// actually follows the pointer, so the northern lights visibly react when
// you move the mouse instead of just sitting there.
export default function Aurora() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    let target = { x: window.innerWidth / 2, y: window.innerHeight * 0.35 };
    let current = { ...target };
    let raf;

    function onMove(e) {
      target.x = e.clientX;
      target.y = e.clientY;
    }

    function tick() {
      current.x += (target.x - current.x) * 0.07;
      current.y += (target.y - current.y) * 0.07;
      glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-[20%] left-[8%] h-[60vh] w-[60vw] rounded-full opacity-[0.16] blur-[110px] animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-teal), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[5%] right-[-10%] h-[55vh] w-[55vw] rounded-full opacity-[0.14] blur-[120px] animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-violet), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[55%] left-[-15%] h-[50vh] w-[50vw] rounded-full opacity-[0.12] blur-[130px] animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-blue), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[10%] h-[45vh] w-[45vw] rounded-full opacity-[0.1] blur-[120px] animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-green), transparent 70%)",
        }}
      />

      {/* Cursor-reactive glow — the one element that actually answers to the mouse */}
      <div
        ref={glowRef}
        className="hidden sm:block absolute top-0 left-0 h-[380px] w-[380px] rounded-full opacity-[0.2] blur-[85px] mix-blend-screen will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-teal), var(--color-violet) 55%, transparent 75%)",
        }}
      />
    </div>
  );
}
