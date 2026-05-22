import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Pages/Home';
import ProjectDetailed from './Component/ProjectDetailed';
function App() {
 

  return (
    <>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/projects" element={<ProjectDetailed />}/>
      </Routes>
    </>
  )
}

export default App
