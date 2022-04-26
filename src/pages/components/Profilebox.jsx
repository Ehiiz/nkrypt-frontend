import Boxicon from "./microcomponents/Boxicon";
import Microicon from "./microcomponents/Microicon";


export default function Profilebox(){


    return (
        <div className="flex flex-col pt-2 w-full px-4">
     
       <Microicon />
        <div className="flex items-end justify-between mb-4 pt-2 ">
        <h2 className="text-xl font-light text-white">GRANDE CASSE</h2>
        <Boxicon />
        </div> 
        <hr className="mb-2" />    
        </div>
    )
}