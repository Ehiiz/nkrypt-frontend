import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import {Link} from "react-router-dom";
import {ReactComponent as Key} from "../svg/carbon_password.svg"

export default function Answerpass(){

    
    //Color For Navigation Bar
    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return(
    <div className="page">
    <Header />
    <section className="flex flex-col px-4 py-4 mt-12 fixed top-0 mb-8 w-full bg-secondary-600 h-full">
     <h2 className="self-end font-bold text-secondary-900 text-2xl"><span className="text-md font-bold">unlock</span> GRANDE KRYPT</h2> 

    <section className="text-white rounded-t-2xl flex flex-col bg-secondary-500 w-full mt-1 pt-4 px-4 pb-8 h-full">
        <div className="flex flex-col">
        <label className=" mt-3 self-start pl-2 mb-10 text-lg" htmlFor="passcode">Enter The Passcode the Unlock</label>
        <input className="rounded-2xl bg-secondary-500 placeholder:pl-4 h-10 shadow-sm border-white" type="password" name="passcode" placeholder="Enter krypt passcode" />
         </div>


   
            <button className=" shadow border-4 border-white text-secondary-500 self-center w-fit  bg-secondary-100 rounded-full py-4 px-4 font-bold flex mt-4 "> 
            <Link to="/unlocked" className="m-auto flex ">
         <Key />
         <p className="ml-2">
         Unlock Krypt
         </p>
            
            </Link>
        </button>
   
    
    
    
    
    </section>

    </section>

   
    <Nav
           home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}
         />

    </div>
    )
}