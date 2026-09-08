import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/resumeData";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#architecture", label: "System Design" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-hair-soft" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-[15px] tracking-tight text-ink flex items-center gap-2.5">
          <span
            className="inline-flex h-2 w-2 rounded-full animate-twinkle"
            style={{ background: "linear-gradient(135deg, var(--color-teal), var(--color-violet))" }}
            aria-hidden="true"
          />
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-ink-mute">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 hover:text-ink transition-colors group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, var(--color-teal), var(--color-violet))" }}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-soft"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-b border-hair-soft px-5 pb-5">
          <ul className="flex flex-col gap-1 font-mono text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-ink-soft hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
