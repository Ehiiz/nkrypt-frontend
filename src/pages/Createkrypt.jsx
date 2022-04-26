import Header from "./components/Header";
import Nav from "./components/Nav";
import Addoption from "./components/buttons/Addoption";
import {Link} from "react-router-dom";

export default function Createkrypt(){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return(
        <div className="flex flex-col items-center mb-12 h-screen bg-secondary-600">
          <Header />
          <section className="flex flex-col bg-secondary-600 pt-20 w-full items-center px-4 pb-24">
           <div className="w-full">
           <input className=" self-center rounded-2xl bg-secondary-500 placeholder:pl-4 h-10 w-64 shadow-md mb-3" type="text" placeholder="Title" />
              <textarea className=" w-full pl-2 text-white rounded-2xl bg-secondary-500 placeholder:pl-4 shadow-md" name="" id="" cols="30" rows="10" placeholder="Start typing">
             </textarea>
           </div>
             <Addoption />
          <Link to="/access">
            <button className="mt-2 shadow border-1 border-white text-secondary-500 bg-secondary-100 rounded-xl py-4 px-5 font-bold"> 
            Submit
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