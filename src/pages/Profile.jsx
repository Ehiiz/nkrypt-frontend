import Header from "./components/Header";
import Kryptprofile from "./components/microcomponents/Kryptprofile";
import Nav from "./components/Nav";
import Profilebox from "./components/Profilebox";

export default function Profile(){


    return(
        <div className="flex flex-col items-center">
        <Header />
        <Kryptprofile />
        <section className="flex w-full justify-center">
            <button className="pro-bttn">Dekrypts</button>
            <button className="pro-bttn-dormant">My Krypts</button>
        </section>
        <Profilebox />

        <Nav />

        </div>
    )
}