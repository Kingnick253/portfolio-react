import profilePic from "../Assets/profile-picture.jpg"

export const About = () =>{
    return(
        <div className="p-3 sm:flex gap-2">
            <div className="flex-1">
            <h1 className="font-bold text-3xl">About me</h1>
                <p> Hello and welcome to my Portfolio. My name is Nicholas Webb, and I am currently a student at University of Washington's Full Stack coding bookcamp. </p>
            </div>
            <div className=" flex-1">
                <img className="object-contain h-auto w-96" src={profilePic} alt="picture of me with the glissing off my skin"/>
            </div>
        </div>
    );

}