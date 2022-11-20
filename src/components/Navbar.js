import React from "react";


export  function Navbar(){
    return( 
        <div className=" header bg-gray-300 flex ">
            <h1 className="p-3 font-bold">Nicholas Webb's Portfolio</h1>
            <nav className="ml-auto flex">
                <a href="#portfolio" className="p-3 hover:bg-sky-400">Portfolio</a>
                <a href="#about" className="p-3 hover:bg-sky-400">About</a>
                <a href="#contact" className="p-3 hover:bg-sky-400">Contact Me</a>
                <a href="#resume" className="p-3 hover:bg-sky-400">Resume</a>

            </nav>
           

        </div>
    );
}