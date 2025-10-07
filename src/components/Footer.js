export default function Footer() {
    return(
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white">Nicholas Webb</h3>
                        <p className="text-gray-400">Full Stack Developer</p>
                    </div>
                    <nav className="flex space-x-6">
                        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
                        <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio</a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
                        <a href="#resume" className="text-gray-400 hover:text-white transition-colors duration-200">Resume</a>
                    </nav>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">&copy; 2024 Nicholas Webb. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}