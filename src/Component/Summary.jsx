import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Download, ArrowRight,Eye } from 'lucide-react'
import profile_Photo from '../assets/rrr.jpeg'
function Summary() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-28 pb-16 px-5 sm:px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="relative group flex justify-center items-center">
            <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-cyan-200 blur-3xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            {/*My Profile Image */}
            <div
              className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[330px] md:h-[330px]
                         lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-cyan-100
                         hover:border-cyan-200 shadow-4xl group-hover:scale-105 transition duration-500"
            >
              <img
                src={profile_Photo}
                alt="Rahul Rathod"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right Side section like summary resume etc*/}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-2">
            <p className="text-cyan-400 font-semibold uppercase tracking-[2px] text-sm sm:text-base mb-4">
              Open To Work
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Hi, I'm{' '}
              <span className="text-cyan-400 hover:text-cyan-300 transition">
                Rahul Rathod
              </span>
            </h1>

            <h2 className="mt-4 text-lg sm:text-2xl lg:text-3xl text-gray-700 font-semibold leading-relaxed">
              Java Full Stack Developer <br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>
              React Developer
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto md:mx-0">
              Passionate about building responsive and modern web applications
              using React, Tailwind CSS, Java, and scalable technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <button className="flex items-center gap-2 bg-black text-white px-7 py-3 rounded-xl hover:bg-cyan-300 hover:text-black transition duration-300 shadow-md">
                View Projects
                <ArrowRight size={18} />
              </button>

             <a href="Rahul_Resume.pdf"
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 border-2 border-black text-black px-4 py-2.5 rounded-xl hover:bg-cyan-300 hover:border-cyan-300 transition duration-300'
                >
                View Resume  <Eye/>
             </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Summary
