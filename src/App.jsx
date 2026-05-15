import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { ExternalLink, ArrowRight } from "lucide-react";
import './App.css'
import Navbar from './Component/Navbar'
import Summary from './Component/Summary'
import Skills from './Component/Skills'
import ProjectShort from './Component/ProjectShort';

function App() {
 

  return (
    <>
    <div>
     <Navbar/>
    
     <Summary/>
    
     <Skills/>
    <ProjectShort/>
     <div className='my-40 bg-red-700'>

     </div>
    </div>
    
    </>
  )
}

export default App
