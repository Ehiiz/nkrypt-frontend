import Header from "./components/Header";
import Nav from "./components/Nav";
import Lockoption from "./components/buttons/Lockoption";
import {Link} from "react-router-dom";

export default function Access (){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return (
        <div className="h-screen">
            <Header />
            <div className="flex flex-col items-center pt-40">
           <Link to="/quiz">
           <Lockoption />
           </Link>
           
           <Lockoption />
           <Lockoption />

            </div>
         
            <Nav
             home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile} />
        </div>
    )
}