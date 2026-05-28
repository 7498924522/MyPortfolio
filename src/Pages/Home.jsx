import React, { useRef } from 'react'
import Navbar from '../Component/Navbar'
import Summary from '../Component/Summary'
import ProjectShort from '../Component/ProjectShort'
import Skills from '../Component/Skills'
import Experience from '../Component/Experience'
import Education from '../Component/Education'
import Certificates from '../Component/Certificates'
import Footer from '../Component/Footer'

function Home() {
  const summaryRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
    {/* Top Section */}
    <Navbar
        scrollToSection={scrollToSection}
        summaryRef={summaryRef}
        skillRef={skillRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        educationRef={educationRef}
        certificatesRef={certificatesRef}
        footerRef={footerRef}
        
      />

    {/* My Short Summary  */}
    <div ref={summaryRef}>
    <Summary/>
    </div>

     {/* Skills */}
      <div ref={skillRef}>
        <Skills />
      </div>

    {/* Project Section */}
    <div ref={projectRef}>
    <ProjectShort/>
    </div>
    
    
    {/* Experince Section */}
    <div ref={experienceRef}>
    <Experience/>
    </div>

    {/* Education Section */}
    <div ref={educationRef}>
    <Education/>
    </div>

    {/* Certification  Section */}
    <div ref={certificatesRef}>
    <Certificates/>
    </div>

      {/*Footer  Section */}
      <div ref={footerRef}>
    <Footer
    
     scrollToSection={scrollToSection}
        summaryRef={summaryRef}
        skillRef={skillRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        educationRef={educationRef}
        certificatesRef={certificatesRef}
       
        />
    </div>
    </>
  )
}

export default Home
