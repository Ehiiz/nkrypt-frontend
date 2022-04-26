export default function Passcode(){


    return(
        <section className="w-full text-white bg-secondary-600 flex flex-col black mt-16 pt-16 px-4">
        <div className="flex flex-col">
        <label className="self-start pl-2 mb-10 text-lg" htmlFor="questions">Create Your Passcode</label>
        <input className="rounded-2xl bg-secondary-500 placeholder:pl-4 h-10 shadow-sm" type="text" name="passcode" placeholder="Enter your passcode" />
       
        </div>
        
      
        </section>
    )
}