import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Share from "../macro-components/Share";
import {Link} from "react-router-dom";


export default function Unlocked(){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return(
      
        <div className="page">
            <Header />
            <section className="unlock-sec">
            <div className="flex w-full justify-between mb-4">
            <h1 className="unlock-title">GRANDE KRYPT</h1>
            <p className="unlock-user">@ahm_ehiz</p>
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
               <img className="unlock-img" src="img/Rectangle 47.png" alt="" />
            </div>

            <div className="w-32">
               <img className="unlock-img" src="img/Rectangle 47.png" alt="" />
            </div>
            <div className="self-center mt-12 mb-2">
           <Share />

           </div>
           <Link className="unlock-bttn" to="/kryptpage">
            <button className=""> 
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