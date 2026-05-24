import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {Mail, Phone,MapPin,ArrowUpRight,} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white mt-20">

      <div className="max-w-7xl  px-6 md:px-10 lg:px-14 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>

            <h1 className="text-3xl font-bold">
              Rahul <span className="text-cyan-300">Rathod</span>
            </h1>

            <p className="text-gray-400 mt-5 leading-8">
              Frontend & Java Full Stack Developer passionate about building
              scalable, responsive, and real-world applications with modern
              technologies.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/10 border border-cyan-300/20 text-cyan-300">
              Open To Work
            </div>

          </div>

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-4 text-gray-400  md:grid grid grid-cols-2 md:grid-cols-1">

              {[
                 "About", "Skills","Projects", "Experience", "Education","Certificates",
                
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-cyan-300 cursor-pointer transition duration-300"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Contact
            </h2>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
                <Mail size={18} />
                <span>rrathod7602@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
                <Phone size={18} />
                <span>+91 7498924522</span>
              </div>

              <div className="flex items-center gap-3 hover:text-cyan-300 transition duration-300">
                <MapPin size={18} />
                <span>Chh. Sambhajinagar, Maharashtra</span>
              </div>

            </div>

          </div>

          <div>

            <h2 className="text-xl font-semibold mb-5">
              Connect With Me
            </h2>

            <div className="flex gap-4">

              <a
                href="https://github.com/7498924522"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-cyan-300 hover:text-black transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/rathod-rrr9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-cyan-300 hover:text-black transition duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://leetcode.com/u/Rocks_777/"
                className="w-14 h-14 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-cyan-300 hover:text-black transition duration-300"
              >
                <SiLeetcode size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © 2026 Rahul Rathod. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by Rahul Rathod
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;