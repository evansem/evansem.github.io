import { about, profile, projects } from "@/content/site";
import { Commit } from "@/components/Commit";
import { EasterEggs, OpenTerminalHint, Uptime } from "@/components/EasterEggs";
import { TypedRole } from "@/components/Hero";
import { ProjectBranch } from "@/components/ProjectBranch";
import { Graph } from "@/components/Spine";
import { ToastProvider } from "@/components/Toast";

export default function Home() {
  return (
    <ToastProvider>
      <header className="topbar">
        <div className="wrap">
          <span className="prompt"><b>{profile.handle}@main</b>:~$ git log --graph</span>
          <nav className="nav">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
            <a className="cv" href={profile.cv} target="_blank" rel="noreferrer">cv.pdf</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <Graph>
          <Commit seed="head" message="feat: say hello" refs={[{ kind: "head", label: "HEAD -> main" }]} head>
            <div className="hero">
              <TypedRole />
              <h1>Hi, I&apos;m <span className="grad">{profile.name}</span>.</h1>
              <p className="tagline">{profile.tagline}</p>
              <OpenTerminalHint />
            </div>
          </Commit>

          <Commit id="about" seed="about" message="docs: add README.md">
            <div className="prose">
              <h2>About</h2>
              {about.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Commit>

          <div id="projects">
            {projects.map((p, i) => <ProjectBranch key={p.slug} project={p} index={i} />)}
          </div>

          <Commit id="contact" seed="contact" message="chore: open to new opportunities" refs={[{ kind: "tag", label: "v1.0.0" }]}>
            <div className="contact">
              <h2>Let&apos;s talk</h2>
              <p className="cmd"><span>$</span> git checkout -b work-together</p>
              <div className="actions">
                {profile.email && <a className="btn primary" href={`mailto:${profile.email}`}>Say hello</a>}
                <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">Download CV</a>
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                {profile.linkedin && <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
              </div>
            </div>
          </Commit>

          <Commit seed="init" message="init: hello world">
            <span />
          </Commit>
        </Graph>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name} · built with Next.js</span>
          <span><span className="ok">✓</span> all checks passed · <Uptime /></span>
        </div>
      </footer>

      <EasterEggs />
    </ToastProvider>
  );
}
