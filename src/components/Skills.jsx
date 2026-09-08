import { motion } from "framer-motion";
import { skillClusters } from "../data/resumeData";

// First cluster (AI & GenAI) is the widest tile — it's the core identity.
export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <h2 className="font-display text-3xl sm:text-4xl text-ink mb-14">Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillClusters.map((cluster, i) => (
          <motion.div
            key={cluster.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className={`glass glass-hover rounded-xl p-6 ${i === 0 ? "sm:col-span-2" : ""}`}
          >
            <h3 className="font-display text-[15px] text-ink mb-4">{cluster.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cluster.items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] text-ink-soft border border-hair rounded-md px-2.5 py-1.5 hover:border-teal-soft/60 hover:text-ink transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
