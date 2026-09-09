import { motion } from "framer-motion";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-8 relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-12">
          Work Experience
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline vertical bar */}
        <div
          className="absolute left-[7px] sm:left-[8px] top-3 bottom-3 w-px bg-hair"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative pl-8 sm:pl-10 p-3 -ml-3 rounded-2xl transition-all duration-200 hover:bg-panel/30"
            >
              {/* Timeline marker with teal / purple aura glow */}
              <span
                className={`absolute left-0 sm:left-[0.5px] top-4.5 h-[15px] w-[15px] sm:h-[16px] sm:w-[16px] rounded-full border-2 transition-all duration-300 ${
                  job.current
                    ? "border-teal bg-teal shadow-[0_0_12px_rgba(53,224,194,0.7)]"
                    : "border-purple-400 bg-bg group-hover:border-teal group-hover:bg-teal group-hover:shadow-[0_0_12px_rgba(53,224,194,0.6)]"
                }`}
              >
                {job.current && (
                  <span className="absolute inset-[2.5px] rounded-full bg-bg animate-pulse" />
                )}
              </span>

              {/* Company & Period Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink group-hover:text-teal transition-colors">
                    {job.org}
                  </h3>
                  <p className="font-mono text-[13px] text-purple-400 font-medium mt-0.5">
                    {job.location}
                  </p>
                </div>
                <p className="font-mono text-[12.5px] text-ink-mute whitespace-nowrap">
                  {job.period}
                </p>
              </div>

              {/* Role Title */}
              <div className="mt-3">
                <h4 className="font-display text-[15.5px] sm:text-[16.5px] font-semibold text-ink/90 group-hover:text-teal-soft transition-colors">
                  {job.role}
                </h4>
              </div>

              {/* Responsibility bullets */}
              <ul className="mt-3 space-y-2 max-w-3xl">
                {job.points.map((pt, idx) => (
                  <li key={idx} className="text-[14.5px] leading-relaxed text-ink-soft flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal/60 shrink-0 group-hover:bg-teal transition-colors" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11.5px] text-ink-soft bg-bg-raised/80 border border-hair-soft rounded-md px-2.5 py-1 hover:border-teal/50 hover:text-teal-soft hover:shadow-[0_0_8px_rgba(53,224,194,0.25)] transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
