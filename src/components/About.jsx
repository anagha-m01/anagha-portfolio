import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    title: "Experience",
    detail: "Software Engineer Intern",
    subdetail: "QuanHack Solutions · Python & AI workflows",
  },
  {
    icon: Code2,
    title: "Projects",
    detail: "Agentic Systems & ML",
    subdetail: "LangGraph, RAG & predictive modeling",
  },
  {
    icon: GraduationCap,
    title: "Education",
    detail: "B.Tech in ECE",
    subdetail: "APJ AKTU · 8.22 CGPA",
  },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        {/* Left column: Humanified narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-[16px] sm:text-[16.5px] leading-relaxed text-ink-soft">
            <p>
              I am an AI/ML Engineer driven by a curiosity for building software products that make a real impact.
              Transitioning from an <strong className="font-medium text-ink">Electronics Engineering</strong> background
              into modern software development, I found my passion at the intersection where intelligent models connect
              with solid backend systems.
            </p>

            <p>
              Currently at <strong className="font-medium text-ink">QuanHack Solutions</strong>, I engineer multi-agent
              workflows with <strong className="font-medium text-ink">LangGraph</strong>, semantic retrieval pipelines with{" "}
              <strong className="font-medium text-ink">pgvector</strong>, and asynchronous <strong className="font-medium text-ink">FastAPI</strong> microservices.
              Clean, reliable, and built to solve practical everyday problems.
            </p>
          </div>
        </motion.div>

        {/* Right column: Highlights cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: 0.1 * (idx + 1) }}
                className="group relative flex items-center gap-4 rounded-2xl border border-hair-soft bg-panel/70 p-5 backdrop-blur-sm transition-all duration-200 hover:border-hair hover:bg-panel hover:translate-y-[-2px]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-hair/80 bg-bg-raised text-teal transition-colors group-hover:border-teal/40 group-hover:text-teal-soft">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] text-ink-soft">
                    {card.detail}
                  </p>
                  <p className="text-[12px] text-ink-mute">
                    {card.subdetail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
