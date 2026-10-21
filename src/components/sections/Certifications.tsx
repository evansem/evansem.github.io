import { sections } from "@/content";
import { Commit } from "../graph/Commit";
import { CertificationGrid } from "./CertificationGrid";

export function Certifications() {
  const { commitMessage, tagRef, heading } = sections.certifications;

  return (
    <Commit
      id="certifications"
      seed="certs"
      message={commitMessage}
      refs={[{ kind: "tag", label: tagRef }]}
    >
      <div className="prose">
        <h2>{heading}</h2>
      </div>
      <CertificationGrid />
    </Commit>
  );
}
