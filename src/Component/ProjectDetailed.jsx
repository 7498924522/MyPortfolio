import React, { useState } from "react";
import {
  ArrowLeft,ChevronDown,ChevronUp,
  ExternalLink,FolderGit2,
  GitBranch,Lightbulb,
  Target,Workflow,
} from "lucide-react";

import {
  FaGithub,FaReact,FaStore,
  FaHtml5,FaJava,FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,SiJavascript, SiVercel,
  SiMysql,SiPostman,SiRender,SiDocker,
  SiRazorpay, SiTwilio,SiSpring,SiHtml5,
} from "react-icons/si";

// Project Images
import CPU_Image from "../assets/CPP.PNG";
import ChapatiMart_Image from "../assets/C_Mart.PNG";
import Number_System from "../assets/NSS.PNG";
import G_G from "../assets/GG.PNG";

// PopUp Images CICD and WorkFlow
import CI_CD from "../assets/CI&CD.png";
import CPU_FLOW from "../assets/cpuFlow.png";
import ChapatiWorkflow from "../assets/C_Mart_Flow.png";
import Conversion_Flow from "../assets/ConversionFlow.png";
import Invoice_Work_Flow from "../assets/Invoice_Flow.png";

function ProjectCard({
  image,
  category,
  title,
  description,
  techStack,
  accordionItems,
  liveLink,
  githubLink,
  workflowImage,
  cicdImage,
}) {
  const [openAcc, setOpenAcc] = useState(null);
  const [popup, setPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");

  const handlePopup = (image, title) => {
    setSelectedImage(image);
    setPopupTitle(title);
    setPopup(true);
  };

  return (
    <div className="bg-white rounded-[30px] border shadow-md overflow-hidden mb-10">
      <div className="relative bg-gray-100">
        <div className="absolute md:top-5 top-0.5 right-3 z-10">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-100 text-green-700  md:px-4 px-2 md:py-1 py-0 rounded-full text-sm font-medium shadow flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Live
          </a>
        </div>

        {cicdImage && (
          <button
            onClick={() => handlePopup(cicdImage, `${title} CI & CD`)}
            className="absolute md:bottom-4 bottom-0.5 right-5 bg-black text-white px-2 md:px-4 md:py-1 py-0.5 md:rounded-xl rounded-md flex items-center gap-2 hover:bg-cyan-500 transition"
          >
            <GitBranch size={18} />
            CI & CD
          </button>
        )}

        <button
          onClick={() => handlePopup(workflowImage, `${title} Workflow`)}
          className="absolute md:bottom-4 bottom-0 left-5 bg-black text-white px-2 md:px-4 md:py-1 py-0 md:mt-0 mt-4 md:rounded-xl rounded-md flex items-center gap-2 hover:bg-cyan-500 transition"
        >
          <Workflow size={18} />
          Workflow
        </button>

        <div className="aspect-video flex justify-center items-center p-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="p-6 md:p-10">
        <p className="uppercase tracking-[2px] text-cyan-500 text-sm font-medium mb-2">
          {category}
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>

        <p className="text-gray-600 leading-8">{description}</p>

        {/* Tech Stack Used */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-2 border bg-gray-50 px-4 py-2 rounded-xl hover:bg-cyan-100 transition"
                >
                  <Icon size={18} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {accordionItems.map((item, index) => {
            const isOpen = openAcc === index;

            return (
              <div key={index} className="rounded-2xl border overflow-hidden">
                <button
                  onClick={() => setOpenAcc(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between px-5 py-4 transition
                  ${
                    isOpen
                      ? "bg-black text-white"
                      : "bg-gray-50 hover:bg-cyan-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-semibold">{item.label}</span>
                  </div>

                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isOpen && (
                  <div className="px-5 py-4 text-gray-600 leading-7 bg-white">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/*Here's the Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white md:px-6 px-4 md:py-3 sm:py-2 md:rounded-xl rounded-md flex items-center gap-2 hover:bg-cyan-500 transition"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border md:px-6 px-4 md:py-3 sm:py-2 md:rounded-xl rounded-md flex items-center gap-2 hover:bg-black hover:text-white transition"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 md:px-8 py-4 bg-gray-50">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-black">
                  {popupTitle}
                </h2>

                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Workflow and system design of the application
                </p>
              </div>

              <button
                onClick={() => setPopup(false)}
                className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>

            <div className="p-4 md:p-8 max-h-[75vh] overflow-y-auto">
              <div className="rounded-3xl overflow-hidden border bg-gray-100 flex justify-center items-center p-3 md:p-6">
                <img
                  src={selectedImage}
                  alt="Project Architecture"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectDetailed() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-6 md:px-12 pt-4 flex items-center gap-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center  rounded-md px-4 py-1 hover:bg-black hover:text-white transition"
        >
          <ArrowLeft size={18} />
         
        </button>

        <div className="flex items-center gap-3">
          <FolderGit2 size={28} />
          <h1 className="text-3xl font-bold">Projects</h1>
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
        {/* ChapatiMart */}
        <ProjectCard
          image={ChapatiMart_Image}
          workflowImage={ChapatiWorkflow}
          cicdImage={CI_CD}
          category="Real World E-Commerce Platform"
          title="ChapatiMart"
          description="Built for my relatives shop in Mumbai inspired by Zepto and Zomato for online daily essentials ordering."
          liveLink="https://chapati-mart.vercel.app/"
          githubLink="https://github.com/7498924522/ChapatiMart"
          techStack={[
            { name: "HTML", icon: SiHtml5 },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "React JS", icon: FaReact },
            { name: "JS", icon: SiJavascript },
            { name: "Java", icon: FaJava },
            { name: "Spring-Boot", icon: SiSpring },
            { name: "MySQL", icon: SiMysql },
            { name: "Aiven MySQL", icon: FaDatabase },
            { name: "Docker", icon: SiDocker },
            { name: "Render", icon: SiRender },
            { name: "Vercel", icon: SiVercel },
            { name: "Razorpay", icon: SiRazorpay },
            { name: "Postman", icon: SiPostman },
          ]}
          accordionItems={[
            {
              icon: <Lightbulb size={18} />,
              label: "Why I Built This ?",
              content:
                "Clearly aimed to help my relatives shop to improve business productivity by introducing online ordering system instead of manual order handling. I approached them with this idea to modernize their workflow. A key motivation behind this project was that, since I had the knowledge to build such an application, I chose to develop it myself rather than relying on an external freelancer. ",
            },
            {
              icon: <Target size={18} />,
              label: "What I Try To Improve?",
              content:
                "Plan is to improve my relatives business productivity through this online ordering system instead of manual.",
            },
          ]}
        />

        {/* CPU Scheduling */}
        <ProjectCard
          image={CPU_Image}
          workflowImage={CPU_FLOW}
          category="Operating System Learning Platform"
          title="CPU Scheduling Algorithm Visualizer"
          description="An interactive educational platform built to simplify complex CPU Scheduling Algorithms through real-time Gantt chart visualization, waiting time, and turnaround time calculations. Inspired by my own learning challenges in Operating Systems, I approached our HOD to explore using this application in classroom projector-based teaching for better student understanding and engagement."
          liveLink="https://chapati-mart.vercel.app/"
          githubLink="https://github.com/7498924522/Scheduling-algorithm-app"
          techStack={[
            { name: "HTML", icon: FaHtml5 },
            { name: "React JS", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "localStorage", icon: FaStore },
            { name: "Vercel", icon: SiVercel },
          ]}
          accordionItems={[
            {
              icon: <Lightbulb size={18} />,
              label: "Why I Built This ?",
              content:
                "During my 2nd year, CPU scheduling algorithms felt abstract, so I built an interactive visualizer.",
            },
            {
              icon: <Target size={18} />,
              label: "What Problem It Solves ?",
              content:
                "Helps students visualize CPU scheduling execution through Gantt charts and calculations.Helped students easily understand exam-focused CPU Scheduling concepts, which are fixed topics in end-semester exams and can contribute significantly to scoring (6 marks).Key point is i solved round-robin algorithm with (Quantum Time:- 3) when i attended my 4th SEM .",
            },
          ]}
        />

        {/* Number system Conversion Hub */}
        <ProjectCard
          image={Number_System}
          workflowImage={Conversion_Flow}
          category="Digital Electronics Learning Platform"
          title="Number System Conversion Hub"
          liveLink="https://number-system-conversion-qobn.vercel.app/home"
          description="An interactive educational platform designed to simplify Number System conversions (Decimal, Binary, Octal, Hexadecimal) through step-by-step calculations and visual learning. Built to help students and teachers better understand complex conversion logic in classroom teaching."
          githubLink="https://github.com/7498924522/NumberSystemConversion"
          techStack={[
            { name: "HTML", icon: FaHtml5 },
            { name: "React JS", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "localStorage", icon: FaStore },
            { name: "Vercel", icon: SiVercel },
          ]}
          accordionItems={[
            {
              icon: <Lightbulb size={18} />,
              label: "Why I Built This ?",
              content:
                "During my 2nd year (3SEM), Number System Conversion felt abstract, so I built an interactive visualizer across all number system even vice-verca.",
            },
            {
              icon: <Target size={18} />,
              label: "What Problem It Solves ?",
              content:
                "Solves the difficulty students face while understanding Number System conversions by providing step-by-step calculations between Decimal, Binary, Octal, and Hexadecimal formats. It eliminates confusion in manual conversion methods and helps teachers explain concepts more effectively during classroom sessions.",
            },
          ]}
        />

        {/* Automated Invoice & Billing System */}
        <ProjectCard
          image={G_G}
          workflowImage={Invoice_Work_Flow}
          category="Automation"
          title="Automated Invoice & Billing System"
          description="Developed a dynamic billing system for a real-life retail shop  to simplify daily 
          billing operations and improve efficiency. The system supports real-time price calculation for multiple items, 
          persistent bill storage using LocalStorage, print-ready invoices, and a clean responsive UI for smooth usability.
          And also i have added this into E-Commerce application for invoice along with order package."
          liveLink="https://billing-page-theta.vercel.app/"
          githubLink="https://github.com/7498924522/Billing_Page"
          techStack={[
            { name: "HTML", icon: FaHtml5 },
            { name: "React JS", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "localStorage", icon: FaStore },
            { name: "Vercel", icon: SiVercel },
          ]}
          accordionItems={[
            {
              icon: <Lightbulb size={18} />,
              label: "Why I Built This ?",
              content:
                "I built this project after observing a real problem in my relative’s retail shop, where daily billing and total calculations were handled manually in notebooks, often causing delays and calculation errors. Realizing the opportunity to simplify this process through technology, I developed a smart billing system to automate calculations, improve efficiency, and reduce manual effort in day-to-day shop operations.",
            },
            {
              icon: <Target size={18} />,
              label: "What Problem It Solves ?",
              content:
                "Solves the problem of manual billing and total calculation in retail shops by selecting product, where maintaining records in notebooks can lead to calculation mistakes, time consumption, and inefficiency.",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectDetailed;
