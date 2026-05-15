import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub, } from 'react-icons/fa'
import './App.css'
import Navbar from './Component/Navbar'
import Summary from './Component/Summary'
import Skills from './Component/Skills'

function App() {
 

  return (
    <>
    <div>
     <Navbar/>
    
     <Summary/>
    
     <Skills/>
      
     
    </div>
    
    </>
  )
}

export default App
