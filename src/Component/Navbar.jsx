import React, { useState } from "react";
import {
  Menu,
  X,
  House,
  User,
  Brain,
  FolderGit2,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Mail,
} from "lucide-react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { name: "Home", icon: <House size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Skills", icon: <Brain size={18} /> },
    { name: "Projects", icon: <FolderGit2 size={18} /> },
    { name: "Experience", icon: <BriefcaseBusiness size={18} /> },
    { name: "Education", icon: <GraduationCap size={18} /> },
    { name: "Certificates", icon: <Award size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
  
          <h1 className="text-2xl font-bold text-black tracking-wide">
            Dev<span className="text-cyan-300">.Zone</span>
          </h1>

          {/* Desktop Menu When Normal Screen*/}
          <ul className="hidden md:flex items-center gap-10 text-black font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="group cursor-pointer flex items-center gap-2 hover:text-cyan-400 transition duration-300"
              >
                {item.icon}
                <span className="relative">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button Screen Short*/}
          <button
            className="md:hidden text-black"
            onClick={() => setOpenMenu(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {openMenu && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="fixed top-0 right-0 h-full w-72 bg-white p-6 shadow-2xl">
            
            {/* Close Button */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-4">
              <h2 className="text-xl font-semibold text-black">
                Menu
              </h2>

              <button
                onClick={() => setOpenMenu(false)}
                className="text-black hover:text-red-400 transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Screen visiblility*/}
            <ul className="flex flex-col gap-4 mt-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-black text-lg hover:bg-cyan-500/20 hover:text-cyan-400 px-4 py-3 rounded-xl transition duration-300 cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;