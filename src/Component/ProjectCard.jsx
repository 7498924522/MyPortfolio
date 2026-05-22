import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  image,
  category,
  title,
  description,
  technologies,
  liveLink,
  githubLink,
}) {
  return (
    <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-500 group">

      <div className="relative bg-gray-100">

        <div className="absolute top-5 right-5 z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-green-200 shadow-md">

            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>

            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-medium text-sm cursor-pointer"
            >
              Live
            </a>
          </div>
        </div>

        <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7] flex items-center justify-center  p-4 md:p-6 overflow-hidden">

          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-[1.02] transition  duration-700"
          />
        </div>
      </div>

      <div className="p-6 md:p-8 lg:p-10">

        <p className="uppercase tracking-[2px] text-cyan-500 text-sm font-medium mb-3">
          {category}
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          {title}
        </h2>

        <p className="text-gray-600 leading-8 text-base md:text-lg">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mt-8 cursor-pointer">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 hover:bg-cyan-300 hover:text-black transition duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-10">

          <div className="flex flex-wrap gap-4">

            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black cursor-pointer text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-cyan-300 hover:text-black transition duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 cursor-pointer px-6 py-3 rounded-2xl flex items-center gap-2 text-black hover:bg-cyan-300 transition duration-300"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>

          <button className="text-cyan-500 cursor-pointer hover:text-cyan-700 flex items-center gap-2 text-lg font-medium transition duration-300">
            View Details
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;