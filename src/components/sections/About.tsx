import { about, sections } from "@/content";
import { Commit } from "../graph/Commit";

export function About() {
  return (
    <Commit id="about" seed="about" message={sections.about.commitMessage}>
      <div className="prose">
        <h2>{sections.about.heading}</h2>
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Commit>
  );
}
