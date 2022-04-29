import { useState } from "react"

export default function Passcode(){

    const [passCell, setPassCell] = useState("")

    const updatePass = (e) => {
        const {name, value} = e.target;
        setPassCell(value);
        console.log(value)
    } 
    

    return(
        <section className="w-full text-white bg-secondary-600 flex flex-col black mt-16 pt-16 px-4">
        <div className="flex flex-col">
        <label className="self-start pl-2 mb-10 text-lg" htmlFor="passcode">Create Your Passcode</label>
        <input className="rounded-2xl bg-secondary-500 placeholder:pl-4 h-10 shadow-sm" type="password" name="passcode" placeholder="Enter your passcode" value={passCell} onChange={updatePass} />
        </div>
        
      
        </section>
    )
}