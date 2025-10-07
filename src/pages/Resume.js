import resume from "../pdf/Resume.pdf";
export const Resume = () => {
    return(
        <section className="py-20 px-6" id="resume">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
                    <p className="text-xl text-gray-400 mb-8">Download my resume to learn more about my experience</p>
                    <a 
                        href={resume}
                        download
                        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}