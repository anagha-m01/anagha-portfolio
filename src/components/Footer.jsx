import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="relative border-t border-hair">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-ink-mute">
          {profile.name} · {profile.role}
        </p>
        <p className="font-mono text-[12px] text-ink-mute">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
