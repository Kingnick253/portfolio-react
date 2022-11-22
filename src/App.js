import React from 'react';
import './App.css';
// import  PortfolioContainer from "./components/PortfolioContainer";
import { Navbar } from "./components/Navbar";
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
function App() {
  return (
    <>
    <Navbar />
    <div className='container mx-auto'>
    <About />
    <Portfolio />
    <Contact />
    </div>
    </>
  );
}

export default App;
