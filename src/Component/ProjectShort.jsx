import React from "react";
import {useNavigate} from "react-router-dom";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import {projects} from "../Data/ProjectData"
import { ArrowRight, FolderGit2 } from "lucide-react";

function ProjectShort() {
  const navigate=useNavigate();
   return (
    <>
    <section className="w-full px-4 md:px-8 lg:px-12 py-12">

      <Title
        icon={<FolderGit2 size={40}/>}
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
      <div className='flex justify-end my-2 text-white'>
       <button onClick={()=> navigate("/projects")} className="flex cursor-pointer bg-black mx-6 my-2 p-1.5 hover:bg-cyan-400 gap-2 rounded-md">
        More Projects <ArrowRight className="mt-1" size={20}/>
        </button>
     </div>
    </section>
    
    </>
  );
}

export default ProjectShort;