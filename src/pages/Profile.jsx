import Header from "./components/Header";
import Kryptprofile from "./components/microcomponents/Kryptprofile";
import Nav from "./components/Nav";
import Profilebox from "./components/Profilebox";

export default function Profile(){

    const profileDetails = {
        image : 'img/Rectangle 47.png', 
        username : '@ahm_ehiz',
    }

    const boxstyle = "profile-box"
    const imgstyle = "profile-image"
    const textsize = "text-sm"

    const navcolor = {
        home:"fill-secondary-900",
        notification:"fill-secondary-900",
        profile:"fill-primary",
    }

    const profile = "Profile"


    return(
        <div className="flex flex-col items-center scrollbar-hide">
        <Header
            title = {profile}
         />
        <Kryptprofile
        image = {profileDetails.image}
        username = {profileDetails.username}
        imgstyle={imgstyle}
        boxstyle= {boxstyle}
        textsize= {textsize}
         />
        <div className="flex bg-primary text-white text-sm py-2 px-4 mt-4 mb-8 rounded-full">
        <svg className="mr-1" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.67948 0C10.3959 0 11.0446 0.42 11.4028 1.04C11.5771 1.34 11.6933 1.71 11.6642 2.1C11.6449 2.4 11.732 2.7 11.8869 2.98C12.3807 3.83 13.4747 4.15 14.3267 3.67C15.2852 3.09 16.4954 3.44 17.0473 4.43L17.6959 5.61C18.2575 6.6 17.9477 7.87 16.9795 8.44C16.1565 8.95 15.8661 10.08 16.3599 10.94C16.5148 11.21 16.689 11.44 16.9601 11.58C17.299 11.77 17.5604 12.07 17.7443 12.37C18.1026 12.99 18.0735 13.75 17.725 14.42L17.0473 15.62C16.689 16.26 16.021 16.66 15.3336 16.66C14.9947 16.66 14.6171 16.56 14.3073 16.36C14.0556 16.19 13.7652 16.13 13.4553 16.13C12.4969 16.13 11.6933 16.96 11.6642 17.95C11.6642 19.1 10.7735 20 9.66011 20H8.3434C7.22033 20 6.32961 19.1 6.32961 17.95C6.31025 16.96 5.50666 16.13 4.54818 16.13C4.22868 16.13 3.93823 16.19 3.69619 16.36C3.38637 16.56 2.9991 16.66 2.66993 16.66C1.97284 16.66 1.30481 16.26 0.946583 15.62L0.278545 14.42C-0.0796779 13.77 -0.0990413 12.99 0.259182 12.37C0.414089 12.07 0.70454 11.77 1.03372 11.58C1.30481 11.44 1.47908 11.21 1.64367 10.94C2.12775 10.08 1.8373 8.95 1.01435 8.44C0.055866 7.87 -0.253949 6.6 0.297909 5.61L0.946583 4.43C1.50812 3.44 2.70865 3.09 3.67682 3.67C4.51913 4.15 5.61316 3.83 6.10693 2.98C6.26184 2.7 6.34897 2.4 6.32961 2.1C6.31025 1.71 6.41674 1.34 6.6007 1.04C6.95892 0.42 7.60759 0.02 8.31436 0H9.67948ZM9.01144 7.18C7.49141 7.18 6.26184 8.44 6.26184 10.01C6.26184 11.58 7.49141 12.83 9.01144 12.83C10.5315 12.83 11.732 11.58 11.732 10.01C11.732 8.44 10.5315 7.18 9.01144 7.18Z" fill="white"/>
        </svg>
            settings
        </div>

        <section className="flex w-full justify-center">
            <button className="pro-bttn">dekrypts</button>
            <button className="pro-bttn-dormant">my krypts</button>
        </section>
        <section className="mb-16 w-full">
        <Profilebox />
        <Profilebox />
        <Profilebox />
        <Profilebox />
        <Profilebox />
        <Profilebox />
        <Profilebox />
        <Profilebox />
        </section>
       

        <Nav 
             home={navcolor.home}
             notification={navcolor.notification}
             profile={navcolor.profile}
        />

        </div>
    )
}