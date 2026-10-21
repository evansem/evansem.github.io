import { profile, sections } from "@/content";
import { OpenTerminalHint } from "../easter-eggs/OpenTerminalHint";
import { Commit } from "../graph/Commit";
import { TypedRole } from "./TypedRole";

export function Hero() {
  const { commitMessage, headRef, greeting } = sections.hero;

  return (
    <Commit seed="head" message={commitMessage} refs={[{ kind: "head", label: headRef }]} head>
      <div className="hero">
        <TypedRole />
        <h1>
          {greeting} <span className="grad">{profile.name}</span>.
        </h1>
        <p className="tagline">{profile.tagline}</p>
        <OpenTerminalHint />
      </div>
    </Commit>
  );
}
