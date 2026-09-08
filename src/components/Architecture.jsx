import { motion } from "framer-motion";
import { architecture } from "../data/resumeData";

export default function Architecture() {
  return (
    <section id="architecture" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            How I build AI systems
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft max-w-sm">
            Every layer is a real, swappable service — not a single prompt
            wearing a UI. Requests move from the frontend through orchestration
            and reasoning down to persistence, and out to deployment.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-hair" aria-hidden="true" />
          <div className="space-y-3">
            {architecture.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative pl-11 group"
              >
                <span className="absolute left-[9px] top-1/2 -translate-y-1/2 h-[13px] w-[13px] rounded-full border-2 border-hair bg-bg group-hover:border-teal-soft transition-colors" />
                <div className="flex items-baseline justify-between gap-4 rounded-lg glass glass-hover px-4 py-3.5">
                  <span className="font-display text-[15px] text-ink">{layer.label}</span>
                  <span className="font-mono text-[11.5px] text-ink-mute whitespace-nowrap">
                    {layer.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
