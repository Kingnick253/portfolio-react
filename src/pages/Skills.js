

import data from "../components/iconData";


export const Skills = () => {
    return(
        <div className="">
            <h1 className="font-bold text-3xl mb-2 my-5 text-center underline underline-offset-4">Skills</h1>
            <div className="flex flex-row justify-center gap-4">
                {data.map(({id,icon}) => (
                <div key={id}  className="my-5 flex justify-center flex-row gap-4">
                   
                    
                        {icon ? <img className="w-16" src = {icon} alt="Different icon logos for each language"/>:null }
                  
                </div>
                ))}
            </div>
        </div>



    )
}