import Header from "../core-components/Header";
import Nav from "../core-components/Nav";

export default function Settings(){

    const settings = "Settings"

    const navcolor = {
        home:"fill-secondary-900",
        notification:"fill-secondary-900",
        profile:"fill-primary",
    }


    return (
        <div className="bg-secondary-600 w-full h-screen">
         <Header 
             title = {settings}
         />
         <section className="flex flex-col bg-secondary-600 pt-48 w-full items-center px-8 pb-24">
         <div className="flex justify-between w-full">
             <p className="text-sm text-secondary-400">@ehimare</p>
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8335 14.1775L9.511 14.165L17.5377 6.21501C17.8527 5.90001 18.026 5.48167 18.026 5.03667C18.026 4.59167 17.8527 4.17334 17.5377 3.85834L16.216 2.53667C15.586 1.90667 14.4868 1.91001 13.8618 2.53417L5.8335 10.4858V14.1775V14.1775ZM15.0377 3.71501L16.3618 5.03417L15.031 6.35251L13.7093 5.03167L15.0377 3.71501ZM7.50016 11.1808L12.5252 6.20334L13.8468 7.52501L8.82266 12.5008L7.50016 12.505V11.1808Z" fill="white"/>
            <path d="M4.16667 17.5H15.8333C16.7525 17.5 17.5 16.7525 17.5 15.8333V8.61L15.8333 10.2767V15.8333H6.79833C6.77667 15.8333 6.75417 15.8417 6.7325 15.8417C6.705 15.8417 6.6775 15.8342 6.64917 15.8333H4.16667V4.16667H9.8725L11.5392 2.5H4.16667C3.2475 2.5 2.5 3.2475 2.5 4.16667V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5Z" fill="white"/>
            </svg>

         </div>
             <hr className="text-white border-1 px-4 border-white w-full rounded-full"/>
             <div className="text-white text-xl mt-24">Reset Password</div>
         </section>

    
    
         <Nav 
             home={navcolor.home}
             notification={navcolor.notification}
             profile={navcolor.profile}
        />

        </div>
     
    )
}