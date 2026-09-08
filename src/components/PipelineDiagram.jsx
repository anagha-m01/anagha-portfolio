import { motion } from "framer-motion";
import { pipeline } from "../data/resumeData";

// Layout: 7 nodes arranged as an asymmetric two-row circuit, connected
// left-to-right, evoking a real request path rather than a decorative chart.
const positions = [
  { x: 40, y: 60 },
  { x: 190, y: 60 },
  { x: 340, y: 140 },
  { x: 340, y: 260 },
  { x: 190, y: 340 },
  { x: 40, y: 340 },
  { x: 40, y: 200 },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 0],
];

export default function PipelineDiagram() {
  return (
    <div className="relative w-full aspect-[380/400] max-w-[420px] mx-auto">
      <svg
        viewBox="0 0 380 400"
        className="w-full h-full"
        role="img"
        aria-label="Request flow: User to FastAPI to LangGraph to AI Agents to RAG to Vector Database to Output, looping back to the user"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#35e0c2" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#4fa8f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a480f2" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const p1 = positions[a];
          const p2 = positions[b];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          const d = `M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="#242b4a" strokeWidth="1.5" />
              <motion.path
                d={d}
                fill="none"
                stroke="url(#edgeGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -160 }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.35,
                }}
              />
            </g>
          );
        })}

        {pipeline.map((node, i) => {
          const p = positions[i];
          const isEndpoint = i === 0 || i === 6;
          return (
            <g key={node.id}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="26"
                fill="#0d1024"
                stroke={isEndpoint ? "#35e0c2" : "#3a3f6b"}
                strokeWidth="1.2"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              />
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="26"
                fill="none"
                stroke="#35e0c2"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0], scale: [1, 1.35, 1.35] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              />
              <text
                x={p.x}
                y={p.y + 4}
                textAnchor="middle"
                className="fill-ink-soft"
                style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "9.5px" }}
              >
                {String(i).padStart(2, "0")}
              </text>
              <text
                x={p.x}
                y={p.y + (i % 2 === 0 ? -38 : 48)}
                textAnchor="middle"
                className="fill-ink"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "13px", fontWeight: 500 }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
