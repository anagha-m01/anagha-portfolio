import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "../data/resumeData";
import PipelineDiagram from "./PipelineDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-[13px] text-cyan-soft mb-6">
            <span className="text-ink-mute">$</span> whoami{" "}
            <span className="text-ink-soft">→ AI Engineer, Kochi/Thrissur</span>
          </p>

          <h1 className="font-display text-[2.6rem] leading-[1.06] sm:text-6xl sm:leading-[1.05] text-ink text-balance">
            Building intelligent systems where{" "}
            <span className="text-amber">agents</span>, LLMs, and real APIs
            do the work.
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            {profile.name} designs and ships multi-agent AI applications —
            orchestrated with LangGraph, grounded with RAG, and deployed as
            production backend services in FastAPI, PostgreSQL, and Docker.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-[14px] font-medium text-bg hover:bg-amber-soft transition-colors"
            >
              View Projects
              <ArrowUpRight size={15} />
            </a>
            <a
              href="/Anagha_M_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-hair px-5 py-2.5 text-[14px] text-ink-soft hover:text-ink hover:border-ink-mute transition-colors"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-hair p-2.5 text-ink-soft hover:text-ink hover:border-ink-mute transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-hair p-2.5 text-ink-soft hover:text-ink hover:border-ink-mute transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="glass corner-brackets rounded-2xl border border-hair-soft p-6">
            <PipelineDiagram />
          </div>
          <p className="mt-4 text-center font-mono text-[11px] text-ink-mute">
            request path — user query to grounded output
          </p>
        </motion.div>
      </div>
    </section>
  );
}
