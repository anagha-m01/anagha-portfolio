import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileText, ChevronDown } from "lucide-react";
import { profile } from "../data/resumeData";
import PipelineConstellation from "./PipelineConstellation";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <p className="font-mono text-[13px] text-teal-soft">
              <span className="text-ink-mute">$</span> whoami{" "}
              <span className="text-ink-soft">→ AI Engineer, Kochi/Thrissur</span>
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-soft/30 bg-teal/10 px-2.5 py-0.5 font-mono text-[11px] text-teal-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Open to opportunities
            </span>
          </div>

          <h1 className="font-display text-[3.4rem] leading-[0.98] sm:text-7xl sm:leading-[0.95] tracking-tight text-ink">
            {profile.name}
          </h1>

          <p className="mt-5 font-display text-[1.3rem] sm:text-[1.7rem] leading-snug text-ink-soft text-balance max-w-xl">
            Building intelligent systems where{" "}
            <span className="text-aurora">agents</span>, LLMs, and real APIs
            do the work.
          </p>

          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
            Hands-on AI Engineer passionate about building agentic workflows with
            LangGraph, grounding LLMs with RAG, and integrating backends with
            FastAPI and Docker. Open to AI and software engineering roles.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-[14px] font-medium text-bg transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(120deg, var(--color-teal), var(--color-blue))" }}
            >
              View Projects
              <ArrowUpRight size={15} />
            </a>
            <a
              href="/Anagha_M_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-hair px-5 py-2.5 text-[14px] text-ink-soft hover:text-ink hover:border-teal-soft/60 transition-colors"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-hair p-2.5 text-ink-soft hover:text-ink hover:border-teal-soft/60 transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-hair p-2.5 text-ink-soft hover:text-ink hover:border-teal-soft/60 transition-colors"
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
        >
          <PipelineConstellation />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-mute hover:text-teal-soft transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
