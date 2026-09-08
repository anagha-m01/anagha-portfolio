import { useEffect, useRef } from "react";

// A fixed, full-viewport canvas of tiny stars that twinkle and drift very
// slightly with the pointer and scroll position — evokes a real night sky
// without becoming a distraction from the content in front of it.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars = [];
    let pointer = { x: 0, y: 0 };
    let scrollY = window.scrollY;
    let frame;

    const STAR_COUNT_PER_PX = 1 / 3600; // density

    function buildStars() {
      const count = Math.round(width * height * STAR_COUNT_PER_PX);
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.15 + 0.25,
        baseAlpha: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.25,
        depth: Math.random() * 0.6 + 0.2, // parallax depth
        hue: Math.random() < 0.12 ? "aurora" : "white",
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    }

    function onPointerMove(e) {
      pointer.x = (e.clientX / width - 0.5) * 2;
      pointer.y = (e.clientY / height - 0.5) * 2;
    }

    function onScroll() {
      scrollY = window.scrollY;
    }

    let t = 0;
    function draw() {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const parallaxX = pointer.x * s.depth * 10;
        const parallaxY = pointer.y * s.depth * 10 + scrollY * s.depth * 0.02;
        const twinkle = reduceMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.35;
        const alpha = Math.max(0, Math.min(1, twinkle));

        const x = (s.x + parallaxX + width) % width;
        const y = (s.y + parallaxY + height) % height;

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle =
          s.hue === "aurora"
            ? `rgba(139, 220, 210, ${alpha})`
            : `rgba(238, 240, 251, ${alpha})`;
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
