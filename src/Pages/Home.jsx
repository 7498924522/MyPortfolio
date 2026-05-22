import React from 'react'
import Navbar from '../Component/Navbar'
import Summary from '../Component/Summary'
import ProjectShort from '../Component/ProjectShort'
import Skills from '../Component/Skills'
import Experience from '../Component/Experience'
import Education from '../Component/Education'

function Home() {
  return (
    <>
    {/* Top Section */}
    <Navbar/>

    {/* My Short Summary  */}
    <Summary/>

    {/* Skills */}
    <Skills/>

    {/* Project Section */}
    <ProjectShort/>
    
    {/* Experince Section */}
    <Experience/>

    {/* Education Section */}
    <Education/>
    </>
  )
}

export default Home
