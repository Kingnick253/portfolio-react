import React from 'react';
import './App.css';
// import  PortfolioContainer from "./components/PortfolioContainer";
import { Navbar } from "./components/Navbar";
import { About } from './pages/About';
function App() {
  return (
    <>
    <Navbar />
    <div className='container mx-auto'>
    <About />
    </div>
    </>
  );
}

export default App;
