import { navigation, profile } from "@/content";

export function Header() {
  return (
    <header className="topbar">
      <div className="wrap">
        <span className="prompt">
          <b>{profile.handle}@main</b>:~$ git log --graph
        </span>
        <nav className="nav">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
