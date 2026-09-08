import { motion } from "framer-motion";
import { pipeline } from "../data/resumeData";

// The pipeline as a constellation instead of a circuit diagram — nodes are
// scattered like stars and connected the way a constellation is drawn, and
// a single comet of light traces the request path once, lighting each
// stage as it arrives. Grounded in the page's own night-sky motif rather
// than a generic flowchart.
const positions = [
  { x: 34, y: 292 },   // User
  { x: 96, y: 224 },   // FastAPI
  { x: 168, y: 250 },  // LangGraph
  { x: 208, y: 160 },  // AI Agents
  { x: 274, y: 190 },  // RAG
  { x: 250, y: 96 },   // Vector DB
  { x: 332, y: 44 },   // Output
];

const decorativeStars = [
  { x: 20, y: 60, r: 1.1, delay: 0.2 },
  { x: 300, y: 300, r: 1.4, delay: 1.1 },
  { x: 60, y: 150, r: 0.9, delay: 0.6 },
  { x: 340, y: 200, r: 1.1, delay: 1.6 },
  { x: 150, y: 40, r: 1, delay: 0.9 },
  { x: 360, y: 120, r: 0.8, delay: 0.3 },
];

const STEP = 1 / (positions.length - 1);
const times = positions.map((_, i) => Number((i * STEP).toFixed(3)));

export default function PipelineConstellation() {
  return (
    <div className="glass glow-ring rounded-2xl p-6">
      <div className="relative w-full aspect-[380/340] max-w-[420px] mx-auto">
        <svg
          viewBox="0 0 380 340"
          className="w-full h-full overflow-visible"
          role="img"
          aria-label="Request flow drawn as a constellation: User to FastAPI to LangGraph to AI Agents to RAG to Vector DB to Output"
        >
          <defs>
            <linearGradient id="constellationLine" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#35e0c2" />
              <stop offset="50%" stopColor="#4fa8f7" />
              <stop offset="100%" stopColor="#a480f2" />
            </linearGradient>
            <radialGradient id="cometCore">
              <stop offset="0%" stopColor="#eef0fb" />
              <stop offset="55%" stopColor="#35e0c2" />
              <stop offset="100%" stopColor="#4fa8f7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* faint decorative background stars, purely atmospheric */}
          {decorativeStars.map((s, i) => (
            <circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#eef0fb"
              className="animate-twinkle"
              style={{ animationDelay: `${s.delay}s`, opacity: 0.4 }}
            />
          ))}

          {/* constellation lines: faint base + gradient trace that draws in once */}
          {positions.slice(1).map((p, i) => {
            const prev = positions[i];
            return (
              <g key={i}>
                <line
                  x1={prev.x}
                  y1={prev.y}
                  x2={p.x}
                  y2={p.y}
                  stroke="#242b4a"
                  strokeWidth="1"
                />
                <motion.line
                  x1={prev.x}
                  y1={prev.y}
                  x2={p.x}
                  y2={p.y}
                  stroke="url(#constellationLine)"
                  strokeWidth="1.2"
                  pathLength={1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.85 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + times[i] * 3, ease: "easeOut" }}
                />
              </g>
            );
          })}

          {/* the traveling comet — lags a soft blurred trail behind its core */}
          <motion.circle
            r="10"
            fill="url(#cometCore)"
            style={{ filter: "blur(3px)" }}
            initial={{ cx: positions[0].x, cy: positions[0].y, opacity: 0 }}
            whileInView={{
              cx: positions.map((p) => p.x),
              cy: positions.map((p) => p.y),
              opacity: [0, 1, 1, 1, 1, 1, 1],
            }}
            viewport={{ once: true }}
            transition={{ duration: 3.4, delay: 0.3, times, ease: "easeInOut" }}
          />
          <motion.circle
            r="3.5"
            fill="#eef0fb"
            initial={{ cx: positions[0].x, cy: positions[0].y, opacity: 0 }}
            whileInView={{
              cx: positions.map((p) => p.x),
              cy: positions.map((p) => p.y),
              opacity: [0, 1, 1, 1, 1, 1, 1],
            }}
            viewport={{ once: true }}
            transition={{ duration: 3.4, delay: 0.3, times, ease: "easeInOut" }}
          />

          {/* the stars themselves — each lights up as the comet arrives */}
          {pipeline.map((node, i) => {
            const isEndpoint = i === 0 || i === pipeline.length - 1;
            const p = positions[i];
            const arrival = 0.3 + times[i] * 3.4;
            return (
              <g key={node.id}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={isEndpoint ? 6 : 5}
                  fill="#0d1024"
                  initial={{ stroke: "#3a3f6b", strokeWidth: 1.2 }}
                  whileInView={{ stroke: "#35e0c2", strokeWidth: 1.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: arrival, duration: 0.3 }}
                />
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r={isEndpoint ? 6 : 5}
                  fill="none"
                  stroke="#35e0c2"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  whileInView={
                    i === pipeline.length - 1
                      ? { opacity: [0, 0.6, 0], scale: [1, 1.8, 1.8] }
                      : { opacity: [0, 0.6, 0], scale: [1, 1.6, 1.6] }
                  }
                  viewport={{ once: true }}
                  transition={
                    i === pipeline.length - 1
                      ? { delay: arrival, duration: 2, repeat: Infinity, repeatDelay: 0.4, ease: "easeOut" }
                      : { delay: arrival, duration: 0.9, ease: "easeOut" }
                  }
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                />
                <motion.text
                  x={p.x}
                  y={p.y + (i % 2 === 0 ? -14 : 22)}
                  textAnchor="middle"
                  className="fill-ink"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "12.5px", fontWeight: 500 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: arrival + 0.05, duration: 0.35 }}
                >
                  {node.label}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-3 text-center font-mono text-[11px] text-ink-mute">
        request path — user query to grounded output
      </p>
    </div>
  );
}
