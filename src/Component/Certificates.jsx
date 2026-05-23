import React from 'react'
import Title from './Title'
import { Award, Eye } from 'lucide-react'

function Certificates() {
    const certificates = [
    {
      title: "Smart India Hackathon(SIH) (2025)-Internal Hackathon",
      pdf: "/Hackathon.pdf",
    },
    {
      title: "Model Exhibition (College Level) (2024)",
      pdf: "/participant.pdf",
    },
    ]
  return (
    <div>
       <Title
        icon={<Award size={40} />}
        title="Certificates"
        description="Participations and Achievements."
      />

      <div className="max-w-6xl  md:mx-0 mx-8  space-y-8">

        {certificates.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-[20px] p-2 md:p-4 shadow-md hover:shadow-xl transition duration-500 group"
          >

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <div className="flex-1">

                <h1 className=" md:text-2xl font-semibold text-black">
                  {edu.title}
                </h1>
              </div>

              <a
                href={edu.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-40 gap-2 px-2 py-1 rounded-xl border border-gray-300 text-black hover:bg-cyan-300 transition duration-300 h-fit"
              >
                <Eye size={20} />
                Certificate
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
