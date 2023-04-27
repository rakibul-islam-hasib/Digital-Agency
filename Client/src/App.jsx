import React from 'react'
import NavBar from './Components/NavBar';

function App() {
  document.title = 'Home';
  return (
    <>
      <div className=" h-screen bg-hero-pattern bg-cover bg-fixed">
        <div className="bg-[#343D47] bg-opacity-70">
          <NavBar /> 
        </div>
      </div>
    </>
  )
}

export default App
