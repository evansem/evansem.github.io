import { profile, sections } from "@/content";
import { Uptime } from "./Uptime";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <span>
          © {year} {profile.name} · {sections.footer.builtWith}
        </span>
        <span>
          <span className="ok">✓</span> {sections.footer.status} · <Uptime />
        </span>
      </div>
    </footer>
  );
}
