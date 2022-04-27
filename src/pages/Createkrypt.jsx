import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Addoption from "../bttns/Addoption";
import {Link} from "react-router-dom";

export default function Createkrypt(){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return(
        <div className="page">
          <Header />
          <section className="create">
           <div className="w-full">
           <input className="create-title" type="text" placeholder="Title" />
              <textarea className="create-area" name="" id="" cols="30" rows="10" placeholder="Start typing">
             </textarea>
           </div>
             <Addoption />
          <Link to="/setlock">
            <button className="mt-2 shadow border-1 def-bttn"> 
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