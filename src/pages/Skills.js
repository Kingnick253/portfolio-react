

import data from "../components/iconData";


export const Skills = () => {
    return(
        <section className="py-20 px-6" id="skills">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-xl text-gray-400">Technologies I work with</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {data.map(({id, icon}) => (
                        <div key={id} className="flex flex-col items-center group">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
                                {icon && (
                                    <img 
                                        className="w-12 h-12 object-contain" 
                                        src={icon} 
                                        alt="Technology icon"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}