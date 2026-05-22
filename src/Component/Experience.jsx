import React from 'react'
import Title from './Title'
import { Brain, BriefcaseBusiness, ExternalLink, FileText, Loader } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function Experience() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 ">

  <Title
    icon={<BriefcaseBusiness size={40} />}
    title="Experience"
    description="Real-world assessments, project-based work, and practical development experience."
  />

  <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-[30px] shadow-md hover:shadow-xl transition duration-500 p-6 md:p-10">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 pb-5">

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Frontend Development Assessment
        </h1>

        <p className="text-cyan-600 font-medium mt-2">
          SoftDef · Remote
        </p>
      </div>

      <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium w-fit">
        24 Hour Task · May 2026
      </span>
    </div>

    <div className="mt-8 space-y-4 text-gray-700 leading-8 text-base md:text-lg">

      <p>
        Shortlisted through resume screening for a frontend development assessment.
      </p>

      <p>
        Received a <u><a className='text-blue-600' href="https://www.figma.com/design/U0mtBXWgFim69YDj4pjY8f/Front-end-test?node-id=0-1&t=oH11OPBWgwE38lvp-1">Figma-based UI</a></u>
        {" "}task through official HR communication with a
        24-hour deadline to design and implement a fully responsive frontend
        following provided requirements.
      </p>

      <p>
        Successfully completed, deployed the application on <span className="font-semibold text-black">Render</span>,
        and submitted both the live project URL and GitHub repository for evaluation.
      </p>

    </div>

    <div className="mt-8">

      <h2 className="text-xl font-semibold text-black mb-4">
        Resources & Submission
      </h2>

      <div className="flex flex-wrap gap-4">

        <a
          href="/Frontend Internship Test.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 px-5 py-3 rounded-2xl border border-gray-300 hover:bg-cyan-300 transition duration-300"
        >
        <FileText size={20}/>   Assessment PDF
        </a>

        <a
          href="https://www.figma.com/design/U0mtBXWgFim69YDj4pjY8f/Front-end-test?node-id=0-1&t=oH11OPBWgwE38lvp-1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 px-5 py-3 rounded-2xl border border-gray-300 hover:bg-cyan-300 transition duration-300"
        >
        <Loader size={20}/> Figma Design
        </a>
       
        <a
          href="https://screening-test-task-completed.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex px-5 gap-1  py-3 rounded-2xl bg-black text-white hover:bg-cyan-300 hover:text-black transition duration-300"
        >
        <ExternalLink size={20}/>  Live Project
        </a>
       
        <a
          href="https://github.com/7498924522/Screening_Test_Task"
          target="_blank"
          rel="noopener noreferrer"
          className="flex px-5 py-3 rounded-2xl gap-1 border border-gray-300 hover:bg-cyan-300 transition duration-300"
        >
        <FaGithub size={20}/>  GitHub Repo
        </a>

      </div>
    </div>

    <div className="mt-8">
      <h2 className="text-xl font-semibold text-black mb-4">
        Skills Applied
      </h2>

      <div className="flex flex-wrap gap-3">
        {[
          "HTML",
          "React JS",
          "Tailwind CSS",
          "Responsive Design",
          "Figma",
          "GitHub",
          "Render",
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 hover:bg-cyan-300 hover:text-black transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</div>
  )
}

export default Experience
