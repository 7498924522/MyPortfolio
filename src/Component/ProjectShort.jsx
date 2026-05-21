import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import {projects} from "../Data/ProjectData"

function ProjectShort() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12">

      <Title
        title="Projects"
        description="A showcase of my technical abilities, where I combine tools, technologies, programming languages, third party API's, and problem-solving to build impactful real-world applications."
      />

      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectShort;