import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { flagshipProject, otherProjects } from "../data/resumeData";
import AgentFlow from "./AgentFlow";

export default function Projects() {
  const secondary = otherProjects[0];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="mb-14">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">Projects</h2>
      </div>

      {/* Flagship project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass glow-ring rounded-2xl p-6 sm:p-10 mb-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <p className="font-mono text-[12px] text-teal-soft mb-2">flagship project</p>
            <h3 className="font-display text-2xl sm:text-3xl text-ink">{flagshipProject.name}</h3>
          </div>
          {flagshipProject.github && (
            <a
              href={flagshipProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-hair px-3 py-2 text-[13px] text-ink-soft hover:text-ink hover:border-teal-soft/60 transition-colors shrink-0"
              aria-label={`View ${flagshipProject.name} on GitHub`}
            >
              <Github size={15} />
              <span className="hidden sm:inline">View code</span>
            </a>
          )}
        </div>

        <p className="text-[15px] leading-relaxed text-ink-soft max-w-2xl mb-8">
          {flagshipProject.description}
        </p>

        <AgentFlow />

        <ul className="mt-8 space-y-2.5 max-w-2xl">
          {flagshipProject.points.map((pt, idx) => (
            <li key={idx} className="text-[14.5px] leading-relaxed text-ink-soft flex gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal shrink-0" aria-hidden="true" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {flagshipProject.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-violet-soft border border-hair rounded px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Secondary project — single quiet panel, not a grid, since there's exactly one */}
      {secondary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass glass-hover rounded-xl p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="font-display text-lg text-ink">{secondary.name}</h4>
              <span className="font-mono text-[11px] text-teal-soft whitespace-nowrap">
                {secondary.metric}
              </span>
            </div>
            {secondary.github && (
              <a
                href={secondary.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-ink-mute hover:text-ink transition-colors shrink-0"
                aria-label={`View ${secondary.name} on GitHub`}
              >
                <Github size={15} />
                <span className="hidden sm:inline">Code</span>
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>
          <p className="text-[14px] leading-relaxed text-ink-soft max-w-2xl">
            {secondary.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {secondary.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] text-ink-mute border border-hair rounded px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
