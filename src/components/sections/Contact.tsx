import { profile, sections } from "@/content";
import { Commit } from "../graph/Commit";

export function Contact() {
  const { commitMessage, tagRef, heading, command, emailLabel } = sections.contact;

  return (
    <Commit
      id="contact"
      seed="contact"
      message={commitMessage}
      refs={[{ kind: "tag", label: tagRef }]}
    >
      <div className="contact">
        <h2>{heading}</h2>
        <p className="cmd">
          <span>$</span> {command}
        </p>
        <div className="actions">
          {profile.email && (
            <a className="btn primary" href={`mailto:${profile.email}`}>
              {emailLabel}
            </a>
          )}
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.linkedin && (
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </Commit>
  );
}
