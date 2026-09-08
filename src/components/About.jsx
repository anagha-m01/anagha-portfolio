import { motion } from "framer-motion";

const highlights = [
  { value: "5", label: "cooperating LLM agents orchestrated in one pipeline" },
  { value: "60%", label: "less manual data retrieval via automated semantic search" },
  { value: "30%", label: "better semantic retrieval accuracy over keyword search" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl text-ink text-balance"
        >
          I build the reasoning layer, not just the prompt.
        </motion.h2>

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[16px] leading-relaxed text-ink-soft"
          >
            <p>
              I design agentic AI applications where multiple LLM agents
              cooperate through LangGraph orchestration, ground their answers
              in retrieval instead of guessing, and stay in check with
              guardrails and human-in-the-loop approval gates before anything
              reaches production. RAG pipelines over pgvector, REST APIs in
              FastAPI, async task queues in Redis, and Docker on the way out
              — I care about the whole path from a user's query to a
              trustworthy, grounded answer.
            </p>
            <p>
              I also integrate that intelligence into systems people already
              use, wiring agent behavior into WhatsApp Business and the Meta
              Cloud API rather than leaving it stuck in a notebook.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-9 grid sm:grid-cols-3 gap-3"
          >
            {highlights.map((h) => (
              <div key={h.label} className="glass glass-hover rounded-xl p-4">
                <p className="font-display text-2xl text-aurora">{h.value}</p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-ink-mute">{h.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-[13.5px] text-ink-mute leading-relaxed"
          >
            Before AI, I deployed PLC, DCS, and SCADA systems on the factory
            floor — where a system either behaves reliably under real
            conditions or it doesn't pass inspection. That same standard of
            reliability guides how I build software today.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
