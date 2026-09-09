import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, FileText, ChevronDown } from "lucide-react";
import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-[13px] text-teal-soft mb-5">
            <span className="text-ink-mute">$</span> whoami{" "}
            <span className="text-ink-soft">→ AI/ML Engineer, Kochi/Thrissur</span>
          </p>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-semibold leading-[0.95] tracking-tight text-ink">
            {profile.name}
          </h1>

          <p className="mt-3 font-display text-[1.3rem] sm:text-[1.5rem] text-ink-soft">
            AI/ML Engineer
          </p>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Building practical AI/ML applications and backend systems with
            Python.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-2.5 text-[14px] font-medium text-bg transition-colors hover:bg-teal-soft"
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
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-mute hover:text-teal-soft transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
