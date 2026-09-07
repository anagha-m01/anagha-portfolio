import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { profile } from "../data/resumeData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            Let's build something that works in production.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft max-w-sm">
            Open to AI Engineer, Generative AI Engineer, and AI Software
            Engineer roles. Reach out directly, or use the form.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-[14px] text-ink-soft hover:text-ink transition-colors"
            >
              <Mail size={16} className="text-amber-soft" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-[14px] text-ink-soft hover:text-ink transition-colors"
            >
              <Phone size={16} className="text-amber-soft" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[14px] text-ink-soft hover:text-ink transition-colors"
            >
              <Linkedin size={16} className="text-amber-soft" />
              linkedin.com/in/anagha-m01
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[14px] text-ink-soft hover:text-ink transition-colors"
            >
              <Github size={16} className="text-amber-soft" />
              github.com/anagha-m01
            </a>
            <p className="flex items-center gap-3 text-[14px] text-ink-soft">
              <MapPin size={16} className="text-amber-soft" />
              {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-hair-soft bg-panel/40 p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-mono text-[11px] text-ink-mute mb-1.5">
                name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md bg-bg-raised border border-hair px-3.5 py-2.5 text-[14px] text-ink focus:border-amber-soft outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-[11px] text-ink-mute mb-1.5">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md bg-bg-raised border border-hair px-3.5 py-2.5 text-[14px] text-ink focus:border-amber-soft outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block font-mono text-[11px] text-ink-mute mb-1.5">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md bg-bg-raised border border-hair px-3.5 py-2.5 text-[14px] text-ink focus:border-amber-soft outline-none transition-colors resize-none"
              placeholder="What are you building?"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-[14px] font-medium text-bg hover:bg-amber-soft transition-colors"
          >
            {sent ? "Opening your mail client…" : "Send message"}
            <Send size={14} />
          </button>
          <p className="mt-3 font-mono text-[11px] text-ink-mute">
            opens your email client, addressed to {profile.email}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
