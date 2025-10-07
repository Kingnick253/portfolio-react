import React from "react";


export  function Navbar(){
    return( 
        <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 flex items-center px-6 py-4">
            <h1 className="text-xl font-bold text-white">Nicholas Webb</h1>
            <nav className="ml-auto flex space-x-1">
                <a href="#about" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200">About</a>
                <a href="#portfolio" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200">Portfolio</a>
                <a href="#contact" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200">Contact</a>
                <a href="#resume" className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200">Resume</a>
            </nav>
        </div>
    );
}