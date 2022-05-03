import { Link } from "react-router-dom";
import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Passcode from "../macro-components/Passcode";
import {ReactComponent as Key} from "../svg/carbon_password.svg"

export default function Passcodepage(){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return(
       
        <div className="page">
        <Header />
        <Passcode />
        <Link to="/success" className="mt-20 w-fit border-4 border-white text-secondary-500 bg-secondary-100 rounded-full py-4 px-4 font-bold flex"> 
            <Key />
               Set Passcode
           </Link>
        <Nav 
                home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}

        />

        </div>
    )
}