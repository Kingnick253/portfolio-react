import data from "../components/ProjectData";

console.log(data);
export const Portfolio = () => {
    return(
        <div className=" grid grid-cols-2 gap-4 " id = "portfolio" >
            {data.map(({id, title,image, repo, live}) => (
                <div key={id} className ="p-4 bg-gray-300 h-md rounded-lg">
                    <h1 className="font-bold">{title}</h1>
                    {image ? <img src = {image} />: null}
                    <div>
                    <a className=" hover:bg-slate-600" href={repo} target="_blank" rel="noreferrer">Repo</a>
                    </div>
                    <div>
                    <a  className=" hover:bg-slate-600" href={live} target="_blank" rel="noreferrer">Live</a>
                    
                    </div>
            
                </div>
            
            ))}
        </div>

    );
}
