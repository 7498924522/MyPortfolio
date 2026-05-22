import React from "react";
import {FaReact,FaHtml5,FaCss3Alt,FaJs,FaJava,FaGitAlt,FaGithub,FaDatabase,} from "react-icons/fa";
import {SiTailwindcss,SiMysql,SiPostman,SiRender,SiVercel, SiDocker, SiRazorpay, SiTwilio, SiH2Database} from "react-icons/si";
import {Code2,Database,Wrench,Server, Brain} from "lucide-react";
import Title from "./Title";

function Skills() {
  const skills = [
    {
      title: "Frontend Development (UI)",
      icon: <Code2 size={35} />,
      desc: "Building responsive, interactive, and user-friendly web interfaces with modern technologies.",
      tech: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
    },

    {
      title: "Backend Development",
      icon: <Server size={35} />,
      desc: "Creating server-side logic and scalable application functionality using Java technologies.",
      tech: [{ name: "Java", icon: <FaJava /> },
              {name:"Spring-Boot"},
              {name:"Hibernate"},
              {name:"JPA"}
      ],
    },

    {
      title: "Database",
      icon: <Database size={35} />,
      desc: "Managing and organizing application data efficiently for real-world solutions.",
      tech: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "AIVEN CLOUD DATABASE", icon: <FaDatabase /> },
      ],
    },

    {
      title: "Tools & Platforms",
      icon: <Wrench size={35} />,
      desc: "Using professional tools for version control, deployment, and API testing.And third party API keys",
      tech: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Razorpay", icon: <SiRazorpay /> },
        { name: "Twilio", icon: <SiTwilio /> }
      ],
    },
  ];

  return (
    <section className=" py 8 md:py-10 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <Title icon={<Brain size={40}/>} title="Skills"  description="Tools & Technologies I use to build responsive, scalable, and real-world web applications
        by collaborating multiple layes behind the scene." />
        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-3xl p-8 bg-white shadow-md hover:shadow-2xl
              hover:-translate-y-3 transition-all duration-500 hover:border-cyan-300"
            >

              {/* Icon */}
              <div className=" w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-50
                text-cyan-500 group-hover:bg-cyan-300 group-hover:text-black transition duration-500
              ">
                {skill.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-black mt-6">
                {skill.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-7">
                {skill.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {skill.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-gray-100
                    text-gray-700
                    hover:bg-cyan-300
                    hover:text-black
                    transition duration-300
                    cursor-pointer"
                  >
                    <span className="text-lg">
                      {tech.icon}
                    </span>

                    <span className="text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;