import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { skillCategories, certifications } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-12">
          Skills & Certifications
        </h2>
      </motion.div>

      {/* Skills 3-Card Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 border border-hair-soft flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-[16px] font-semibold text-ink mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12.5px] text-ink-soft bg-bg-raised/80 border border-hair-soft rounded-lg px-2.5 py-1 hover:border-teal/50 hover:text-ink transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications 3-Card Row */}
      <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
        {certifications.map((cert, idx) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08 * idx }}
            className="group glass glass-hover rounded-2xl p-4 sm:p-5 border border-hair-soft flex items-start gap-3.5 hover:border-teal/50 transition-all duration-200"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 border border-teal-soft/30 text-teal group-hover:text-teal-soft group-hover:border-teal/50 transition-colors mt-0.5">
              <Award size={20} strokeWidth={1.75} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1">
                <h4 className="font-display text-[14px] sm:text-[14.5px] font-semibold text-ink group-hover:text-teal-soft transition-colors leading-snug">
                  {cert.title}
                </h4>
                <ArrowUpRight
                  size={14}
                  className="text-ink-mute group-hover:text-teal shrink-0 mt-0.5 transition-colors"
                />
              </div>
              <p className="text-[12px] text-ink-mute mt-1">
                {cert.issuer}
              </p>
              <p className="font-mono text-[11px] text-ink-mute/70 mt-0.5">
                {cert.date}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
