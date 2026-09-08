import { motion } from "framer-motion";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="mb-14">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">Experience</h2>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-hair" aria-hidden="true" />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pl-8 sm:pl-10"
            >
              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] sm:h-[19px] sm:w-[19px] rounded-full border-2 ${
                  job.current ? "border-teal bg-bg" : "border-hair bg-panel"
                }`}
              >
                {job.current && (
                  <span
                    className="absolute inset-[3px] rounded-full animate-pulse"
                    style={{ background: "linear-gradient(135deg, var(--color-teal), var(--color-blue))" }}
                  />
                )}
              </span>

              <div className="grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-4 items-baseline">
                <div>
                  <h3 className="font-display text-xl text-ink">{job.role}</h3>
                  <p className="text-ink-mute text-[14px] mt-0.5">
                    {job.org} · {job.location}
                  </p>
                </div>
                <p className="font-mono text-[12px] text-ink-mute whitespace-nowrap">
                  {job.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2.5 max-w-3xl">
                {job.points.map((pt, idx) => (
                  <li key={idx} className="text-[15px] leading-relaxed text-ink-soft flex gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-teal shrink-0" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-teal-soft border border-hair rounded px-2 py-1"
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
