import profilePic from "../Assets/profile-picture.jpg"
import data from "../components/iconData";

export const About = () =>{
    return(
        <div className="p-3 flex items-center" style={{minHeight: "calc(100vh - 48px"}} id = "about">
            <div className="mx-auto w-full md:w-1/2">
                <div>
                    <img className="object-contain h-auto w-96 mx-auto rounded-lg" src={profilePic} alt="picture of me with the glissing off my skin"/>
                </div>
                <div className="my-5 text-center">
                    <h1 className="font-bold text-3xl mb-2">About me</h1>
                    <p> Hello and welcome to my Portfolio. My name is Nicholas Webb, and I am currently a student at University of Washington's Full Stack coding bookcamp. </p>
                </div>
                
                {data.map(({id,icon}) => (
                <div key={id}  className="my-5 flex justify-center flex-wrap gap-4">
                   
                    
                        {icon ? <img className="w-16" src = {icon} alt="Different icon logos for each language"/>:null }
                  
                </div>
                ))}
            </div>
        </div>
        
    );

}