import Boxicon from "./microcomponents/Boxicon";
import Microicon from "./microcomponents/Microicon";


export default function Profilebox(){


    return (
        <div className="flex flex-col pt-2 min-h-screen">
     
       <Microicon />
        <div className="flex items-center">
        <h2 className="self-base text-xl font-light text-white">GRANDE CASSE</h2>
        <Boxicon />
        </div> 
        <hr className="mb-2" />    
        </div>
    )
}