import React from 'react'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Story from './Components/Story';

function App() {
  document.title = 'Home';
  return (
    <>
      <div className=" h-screen bg-hero-pattern bg-cover bg-fixed">
        <div className="bg-[#343D47] sticky top-0 bg-opacity-70">
          <NavBar /> 
        </div>
        <div className="bg-[#42484F] bg-opacity-40">
          <Hero />
        </div>
      </div>
      <div className="">
        <Story /> 
      </div>
    </>
  )
}

export default App
