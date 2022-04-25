import Header from "./components/Header";
import SingleNote from "./components/microcomponents/SingleNote";
import Nav from "./components/Nav";
import Notificationrow from "./components/Notificationrow";

export default function Notification(){


    return(
        <div className="min-h-full">
        <Header />
        <Notificationrow />
        
        <Nav />


        </div>
    )
}