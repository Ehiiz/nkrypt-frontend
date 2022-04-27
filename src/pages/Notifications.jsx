import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Notifrow from "../macro-components/Notifrow";

export default function Notification(){

    const navcolor = {
        home:"fill-secondary-900",
        notification:"fill-primary",
        profile:"fill-secondary-900",
    }

    const notification = "Notification"

    return(
        <div className="min-h-full scrollbar-hide">
        <Header 
            title={notification}
        />
        <Notifrow />
        
        <Nav 
            home={navcolor.home}
            notification={navcolor.notification}
            profile={navcolor.profile}
        />


        </div>
    )
}