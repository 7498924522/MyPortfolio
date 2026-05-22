import React from 'react'
import Title from './Title'
import { Eye, GraduationCap } from 'lucide-react'

function Education() {
  const educationData = [
    {
      title: "Secondary School (10th)",
      institute: "Shree Shivaji High School",
      year: "2020 - 2021",
      score: "89.20%",
      pdf: "/10th mark-compressed.pdf",
    },
    {
      title: "Higher Secondary (12th)",
      institute: "Vasantrao Naik Jr College ",
      year: "2022 - 2023",
      score: "61.00%",
      pdf: "/12 matksheet-compressed.pdf",
    },
    {
      title: "Bachelor of Technology (B.Tech - CSE)",
      institute: "Shreeyash College of Engineering and Technology Chh.Sambhajinagar (SYCET)",
      year: "2023 - 2027 (Pursuing)",
      score: "1st Year: 7.11 CGPA | 2nd Year: 7.58 CGPA | 3rd Year: Pursuing",
      pdf: "/marklist.pdf",
    },

  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12">

      <Title
        icon={<GraduationCap size={40} />}
        title="Education"
        description="My academic journey, achievements, and continuous learning path in technology and software development."
      />

      <div className="max-w-6xl mx-auto mt-12 space-y-8">

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-[30px] p-2 md:p-4 shadow-md hover:shadow-xl transition duration-500 group"
          >

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

              <div className="flex-1">

                <h1 className="text-2xl md:text-3xl font-bold text-black">
                  {edu.title}
                </h1>

                <p className="text-cyan-600 text-lg mt-2 font-medium">
                  {edu.institute}
                </p>

                <p className="text-gray-500 mt-2">
                  {edu.year}
                </p>

                <div className="mt-5 inline-flex px-5 py-3 rounded-2xl bg-gray-100 border border-gray-200 text-black font-medium">
                  {edu.score}
                </div>

              </div>

              <a
                href={edu.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1 rounded-xl border border-gray-300 text-black hover:bg-cyan-300 transition duration-300 h-fit"
              >
                <Eye size={20} />
                View Marksheet
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;