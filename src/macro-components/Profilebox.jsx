import Microicon from "../micro-components/Microicon"
import Boxicon from "../micro-components/Boxicon"
export default function Profilebox({title, date, time}){


    return (
      
    
        <div className="flex flex-col pt-2 w-full px-4">
       <Microicon 
            date={date}
             time={time}
       />
        <div className="flex items-end justify-between mb-4 pt-2 ">
        <h2 className="text-xl font-light text-white">{title}</h2>
        <Boxicon 
        />
        </div> 
        <hr className="mb-2" />    
        </div>
    )
}