import profilePic from "../Assets/profile-picture.jpg"


export const About = () =>{
    return(
        <div className="min-h-screen flex items-center px-6 py-20" id="about">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Hi, I'm <span className="text-blue-400">Nicholas Webb</span>
                        </h1>
                        <h2 className="text-xl text-gray-400 mb-6">Full Stack Developer</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Welcome to my portfolio. I'm currently a student at University of Washington's 
                            Full Stack coding bootcamp, passionate about creating elegant solutions to complex problems.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#portfolio" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                                View My Work
                            </a>
                            <a href="#contact" className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img 
                            className="w-80 h-80 object-cover mx-auto rounded-2xl shadow-2xl border border-gray-700" 
                            src={profilePic} 
                            alt="Nicholas Webb - Full Stack Developer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}