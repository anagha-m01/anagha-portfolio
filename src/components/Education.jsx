import { motion } from "framer-motion";
import { education } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-baseline justify-between gap-3 border-t border-hair pt-8"
      >
        <div>
          <h3 className="font-display text-lg text-ink">{education.degree}</h3>
          <p className="text-[14px] text-ink-mute mt-1">{education.school}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[12px] text-ink-mute">{education.period}</p>
          <p className="font-mono text-[12px] text-cyan-soft mt-1">CGPA {education.cgpa}</p>
        </div>
      </motion.div>
    </section>
  );
}
