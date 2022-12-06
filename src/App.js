import React from 'react';
import './App.css';
import Footer from './components/Footer';
// import  PortfolioContainer from "./components/PortfolioContainer";
import { Navbar } from "./components/Navbar";
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { Resume } from './pages/Resume';
import { Skills } from './pages/Skills';
function App() {
  return (
    <>
    <Navbar />
    <div className='container mx-auto'>
    <About />
    <Skills />
    <Portfolio />
    <Resume />
    <Contact />
    </div>
    <Footer />
    </>
  );
}

export default App;
