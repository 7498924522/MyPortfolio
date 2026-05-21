import React from 'react'
import Navbar from '../Component/Navbar'
import Summary from '../Component/Summary'
import ProjectShort from '../Component/ProjectShort'
import Skills from '../Component/Skills'

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
    </>
  )
}

export default Home
