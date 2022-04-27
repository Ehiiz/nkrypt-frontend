import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Share from "../macro-components/Share";

export default function Success(){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }
    
    return(
        <div className="page">
            <Header />
            <section className="flex flex-col items-center mt-48">
            <div className="suc-box">
            <p className="text-white text-sm mb-4">You have successfully created a Krypt, share to get your friends to engage</p>
         <p className="text-secondary-400 italic underline font-light text-xs">www.nkrypt.com/123</p>
         <div className="mt-8">
         <Share />

         </div>
        
            </div>

            </section>
           
           
            <Nav 
                home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}
            />
        </div>
    )
}