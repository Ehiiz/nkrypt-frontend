import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Lockoption from "../bttns/Lockoption";
import {Link} from "react-router-dom";

export default function Setlock (){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return (
        <div className="page">
            <Header />
            <section className="flex flex-col items-center pt-40">
           <Link to="/quiz">
           <Lockoption />
           </Link>
            </section>
         
            <Nav
             home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile} />
        </div>
    )
}