import { motion } from "framer-motion";
import { pipeline } from "../data/resumeData";

// A quiet terminal window instead of a decorative diagram — it reads as
// something an engineer actually ran, and the sequence really is a
// sequence (a request moving through real, swappable services).
const lines = pipeline.map((node, i) => {
  const isFirst = i === 0;
  const isLast = i === pipeline.length - 1;
  if (isFirst) return { kind: "cmd", label: node.label };
  if (isLast) return { kind: "done", label: node.label };
  return { kind: "step", label: node.label };
});

export default function RequestTrace() {
  return (
    <div className="glass glow-ring rounded-2xl overflow-hidden max-w-[420px] mx-auto">
      <div className="flex items-center gap-2 border-b border-hair-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-hair" />
        <span className="h-2.5 w-2.5 rounded-full bg-hair" />
        <span className="h-2.5 w-2.5 rounded-full bg-hair" />
        <span className="ml-2 font-mono text-[11px] text-ink-mute">request-trace.log</span>
      </div>

      <div className="p-5 sm:p-6 font-mono text-[13px] leading-loose">
        {lines.map((line, i) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.25 + i * 0.14 }}
            className="flex items-baseline gap-2.5"
          >
            {line.kind === "cmd" && (
              <>
                <span className="text-teal-soft">$</span>
                <span className="text-ink">curl -X POST /query</span>
              </>
            )}
            {line.kind === "step" && (
              <>
                <span className="text-ink-mute select-none">→</span>
                <span className="text-ink-soft">{line.label}</span>
              </>
            )}
            {line.kind === "done" && (
              <>
                <span style={{ color: "var(--color-green)" }}>✓</span>
                <span className="text-ink">{line.label} returned</span>
              </>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + lines.length * 0.14 + 0.2 }}
          className="mt-1 flex items-center gap-2"
        >
          <span className="text-teal-soft">$</span>
          <motion.span
            className="inline-block h-[15px] w-[7px] bg-teal-soft"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          />
        </motion.div>
      </div>
    </div>
  );
}
