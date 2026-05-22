import React from "react";
import Navbar from "./Navbar";
import Project_1 from "../assets/cpuscheduling.PNG"
// import Project_2 from "../assets/C_Mart.PNG";
import { ArrowLeft, ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectDetailed() {
  return (
    <div className="mx-6">
      <div className="flex items-center p-4 gap-5">
        <ArrowLeft/>
        <div className="flex items-center gap-3  px-4 py-2 rounded-lg">
          <FolderGit2 className="w-8 h-8" />
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
      </div>
      
        <span className="bg-gray-100  rounded-md text-gray-500">
          <h2 className=" py-2 rounded-lg mx-20 w-auto font-bold ">
            "A showcase of my technical abilities, where I combine tools,
            technologies, programming languages, third party API's, and
            problem-solving to build impactful real-world applications".
          </h2>
        </span>

         <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-500 group">
        
              <div className="relative bg-gray-100">
        
                <div className="absolute top-5 right-5 z-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-green-200 shadow-md">
        
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
        
                    <a
                      href="https://scheduling-algorithm-app-mnru.vercel.app/home"
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
                    src={Project_1}
                    alt="none"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition  duration-700"
                  />
                </div>
              </div>
        
              <div className="p-6 md:p-8 lg:p-10">
        
                <p className="uppercase tracking-[2px] text-cyan-500 text-sm font-medium mb-3">
                   Hello
                </p>
        
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                 Hello
                </h2>
        
                <p className="text-gray-600 leading-8 text-base md:text-lg">
                  Hello
                </p>
        
                <div className="flex flex-wrap gap-3 mt-8 cursor-pointer">
                  {["Rahul","Rathod","Java"].map((tech, index) => (
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
                      href="https://scheduling-algorithm-app-mnru.vercel.app/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black cursor-pointer text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-cyan-300 hover:text-black transition duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
        
                    <a
                      href="https://github.com/7498924522/Scheduling-algorithm-app"
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
      
    </div>
  );
}

export default ProjectDetailed;
