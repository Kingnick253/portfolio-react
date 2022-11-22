import resume from "../pdf/Resume.pdf";
export const Resume = () => {
    return(
        <div className="p-3 flex justify-center col-auto"  id="resume">
            <div className=" my-5 text-center col-12 col-md-10 mb-3 p-3">
            <h1 className="font-bold text-3xl">Take a Look at my Resume</h1>
            </div>
            <div className="my-5 text-center ">
            <a className="hover:bg-slate-600" href={resume}>Click Me</a>
            </div>

        </div>
    )
}