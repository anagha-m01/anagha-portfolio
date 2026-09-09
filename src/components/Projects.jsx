import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, profile } from "../data/resumeData";

export default function Projects() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="projects" className="scroll-mt-8 relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-10">
          Featured Projects
        </h2>
      </motion.div>

      {/* Featured Card (Top Wide) */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="group glass glass-hover rounded-2xl p-6 sm:p-8 border border-hair-soft hover:border-hair mb-6 transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink group-hover:text-teal-soft transition-colors">
              {featured.title}
            </h3>
            <div className="flex items-center gap-3 shrink-0">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-mute hover:text-ink transition-colors"
                  aria-label={`View ${featured.title} on GitHub`}
                >
                  <Github size={19} />
                </a>
              )}
              {featured.demo && (
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-mute hover:text-teal transition-colors"
                  aria-label={`View ${featured.title} live demo`}
                >
                  <ExternalLink size={19} />
                </a>
              )}
            </div>
          </div>

          <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-ink-soft max-w-3xl mb-6">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="text-[12px] font-mono text-ink-soft bg-bg-raised/80 border border-hair-soft rounded-lg px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Grid for Secondary Projects (2 columns) */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {rest.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass glass-hover rounded-2xl p-6 sm:p-7 border border-hair-soft hover:border-hair flex flex-col justify-between transition-all duration-200"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-[17px] sm:text-[18px] font-semibold text-ink group-hover:text-teal-soft transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-mute hover:text-ink transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-mute hover:text-teal transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[14px] leading-relaxed text-ink-soft mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11.5px] font-mono text-ink-soft bg-bg-raised/80 border border-hair-soft rounded-lg px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Centered CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
        className="flex justify-center"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full border border-hair-soft bg-panel/60 px-6 py-2.5 text-[13.5px] font-medium text-ink-soft hover:text-ink hover:border-teal/50 hover:bg-panel transition-all"
        >
          <span>View More on GitHub</span>
          <Github size={15} />
        </a>
      </motion.div>
    </section>
  );
}
