import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FolderGit2,
  GitBranch,
  Lightbulb,
  Target,
} from "lucide-react";
import { FaGithub, FaReact, FaJava, FaStore, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVercel } from "react-icons/si";

import Project_1 from "../assets/cpuscheduling.PNG";

function ProjectDetailed() {
  const [openSection, setOpenSection] = useState(null);
  const [openAcc, setOpenAcc] = useState(null);

  const techStack = [
    { name: "HTML", icon: <FaHtml5 size={18} /> },
    { name: "React JS", icon: <FaReact size={18} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
    { name: "JavaScript", icon: <SiJavascript size={18} /> },
    { name: "localStorage", icon: <FaStore size={18} /> },
    { name: "Vercel", icon: <SiVercel size={18} /> },
  ];

  const accordionItems = [
    {
      icon: <Lightbulb size={15} />,
      headBg: "bg-orange-50",
      iconBg: "bg-orange-100 text-orange-500",
      label: "Why I Built This ?",
      content:
        "During my OS course, CPU scheduling algorithms felt abstract — every textbook had only static diagrams. I wanted something interactive where I could plug in my own processes and instantly see the Gantt chart, waiting times, and turnaround times. So I built it myself.",
    },
    {
      icon: <Target size={15} />,
      headBg: "bg-blue-50",
      iconBg: "bg-blue-100 text-blue-500",
      label: "What Problem It Solves ?",
      content:
        "Students struggle to understand how different CPU scheduling algorithms prioritize processes. This app lets you input burst times, priorities, and arrival times, then visually computes scheduling outcomes — making abstract OS concepts concrete, comparable, and interactive.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className=" bg-white px-6 md:px-12 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border rounded-xl px-4 py-1 hover:bg-black hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="flex items-center gap-3">
            <FolderGit2 size={28} />
            <h1 className="text-3xl font-bold">Projects</h1>
          </div>
        </div>
      </div>

      <div className="mx-8 mt-7">
        <p className="border-l-4 border-orange-500 bg-white pl-5 pr-6 py-4 text-sm italic leading-7 text-gray-500 rounded-r-xl">
          "A showcase of my technical abilities — combining tools, technologies,
          programming languages, third-party APIs, and problem-solving to build
          impactful real-world applications."
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="bg-white rounded-[30px] border shadow-md overflow-hidden">
          {/*Here My Project Image */}
          <div className="relative bg-gray-100">
            {/* Live Badge */}
            <div className="absolute top-5 right-5 z-10">
              <a
                href="https://scheduling-algorithm-app-mnru.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Live
              </a>
            </div>

            <button className="absolute bottom-4 right-5 cursor-pointer bg-black text-white px-5 py-1 rounded-xl flex items-center gap-2 hover:bg-cyan-500 transition">
              <GitBranch size={18} />
              View Architecture
            </button>

            <div className="aspect-video flex justify-center items-center p-5">
              <img
                src={Project_1}
                alt="CPU Scheduling"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="uppercase tracking-[2px] text-cyan-500 text-sm font-medium mb-2">
              Operating System Learning Platform
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              CPU Scheduling Algorithm Visualizer
            </h2>

            <p className="text-gray-600 leading-8">
              An interactive educational platform built to help students
              understand CPU scheduling algorithms visually through Gantt
              charts, waiting time, and turnaround time calculations.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 border bg-gray-50 px-4 py-2 rounded-xl hover:bg-cyan-100 transition"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 flex flex-col gap-2.5 pt-3  md:pt-6">
              {accordionItems.map((item, i) => {
                const isOpen = openAcc === i;
                return (
                  <div
                    key={i}
                    className="overflow-hidden  rounded-2xl border border-stone-200"
                  >
                    <button
                      className={`flex w-full items-center  gap-3 px-5 py-4 text-left transition-colors duration-200 select-none
                      ${isOpen ? "bg-gray-900 text-white" : `${item.headBg} text-gray-800 hover:brightness-95`}`}
                      onClick={() => setOpenAcc(isOpen ? null : i)}
                    >
                      <span
                        className={`flex h-8 w-8  flex-shrink-0 items-center justify-center rounded-lg text-sm
                      ${isOpen ? "bg-white/15 text-white" : item.iconBg}`}
                      >
                        {item.icon}
                      </span>
                      <span className="syne flex-1 text-sm font-bold">
                        {item.label}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={15} />
                      ) : (
                        <ChevronDown size={15} />
                      )}
                    </button>

                    {isOpen && (
                      <div className="border-t bg-white px-5 py-4 text-sm leading-7 text-gray-600">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://scheduling-algorithm-app-mnru.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-cyan-500 transition"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              <a
                href="https://github.com/7498924522/Scheduling-algorithm-app"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-black hover:text-white transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailed;
