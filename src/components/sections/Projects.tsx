import { projects } from "@/content";
import { ProjectBranch } from "../graph/ProjectBranch";

export function Projects() {
  return (
    <div id="projects">
      {projects.map((project, index) => (
        <ProjectBranch key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
