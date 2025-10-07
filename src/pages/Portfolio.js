import data from "../components/ProjectData";

console.log(data);
export const Portfolio = () => {
    return(
        <section className="py-20 px-6" id="portfolio">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
                    <p className="text-xl text-gray-400">A showcase of my recent work and technical skills</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map(({id, title, image, repo, live}) => (
                        <div key={id} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                            {image && (
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={image} 
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                                <div className="flex space-x-3">
                                    <a 
                                        href={repo} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-colors duration-200"
                                    >
                                        Code
                                    </a>
                                    <a 
                                        href={live} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-colors duration-200"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
