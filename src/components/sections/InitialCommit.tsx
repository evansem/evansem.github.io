import { sections } from "@/content";
import { Commit } from "../graph/Commit";

// The bottom of the history: an empty root commit that closes off the graph.
export function InitialCommit() {
  return (
    <Commit seed="init" message={sections.initialCommit.commitMessage}>
      <span />
    </Commit>
  );
}
