import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl text-ink text-balance"
        >
          From process automation to production AI.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-[16px] leading-relaxed text-ink-soft max-w-2xl"
        >
          <p>
            I started in Electronics and Communication Engineering, deploying
            PLC, DCS, and SCADA systems on the factory floor — work that ran
            on precise state machines, real I/O, and zero tolerance for
            silent failure. That discipline carried directly into software:
            systems either behave correctly under real conditions, or they
            don't ship.
          </p>
          <p>
            That's the standard I hold AI systems to now. As an AI Engineer,
            I build agentic applications where LLMs are one component in a
            larger, testable system — orchestrated with LangGraph, grounded
            with retrieval, validated with guardrails and human-in-the-loop
            checkpoints, and served through REST APIs backed by Postgres,
            Redis, and Docker. I care less about a clever prompt and more
            about whether the whole pipeline holds up in production.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
