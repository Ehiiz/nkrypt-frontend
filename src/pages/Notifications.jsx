import Header from "./components/Header";
import Nav from "./components/Nav";
import Notificationrow from "./components/Notificationrow";

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
        <Notificationrow />
        
        <Nav 
            home={navcolor.home}
            notification={navcolor.notification}
            profile={navcolor.profile}
        />


        </div>
    )
}