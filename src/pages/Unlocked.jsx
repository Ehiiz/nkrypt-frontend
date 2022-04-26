import Header from "./components/Header";
import Nav from "./components/Nav";
import Share from "./components/Share";
import {Link} from "react-router-dom";


export default function Unlocked(){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return(
      
        <div className="flex flex-col items-start h-screen bg-secondary-600">
            <Header />
            <section className="flex flex-col bg-secondary-600 items-center pt-16 w-full px-4 pb-16">
            <div className="flex w-full justify-between mb-4">
            <h1 className="text-xl text-secondary-700">GRANDE KRYPT</h1>
            <p className="text-lg text-secondary-400">@ahm_ehiz</p>
            </div>
               
            <p className="text-white mb-4">This is what we have been dealing with for a very long time 
                and people have failed to understand the impliaction of these machinations of evil, 
                we cannot in our best interest as people collude with the very people who incapicitate Nigeria's interest
            </p>

            <p className="text-white mb-4">This is what we have been dealing with for a very long time 
                and people have failed to understand the impliaction of these machinations of evil, 
                we cannot in our best interest as people collude with the very people who incapicitate Nigeria's interest
            </p>

            <p className="text-white mb-4">This is what we have been dealing with for a very long time 
                and people have failed to understand the impliaction of these machinations of evil, 
                we cannot in our best interest as people collude with the very people who incapicitate Nigeria's interest
            </p>

            <div className="mb-2">
               <img className="w-fit h-fit border-2 border-secondary-900 rounded-sm" src="img/Rectangle 47.png" alt="" />
            </div>

            <div className="w-32">
               <img className="w-fit h-fit border-2 border-secondary-900 rounded-sm" src="img/Rectangle 47.png" alt="" />
            </div>
            <div className="self-center mt-12 mb-2">
           <Share />

           </div>
           <Link className="self-center mt-7 mb-24" to="/kryptpage">
            <button className="shadow text-white bg-primary rounded-xl py-3 px-5 font-bold flex"> 
          Home
           </button>
           </Link>
            </section>
          
           
   

           <Nav 
                home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}
            />
        </div>
    )
}