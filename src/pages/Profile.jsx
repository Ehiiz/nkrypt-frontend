import Header from "../core-components/Header";
import Kryptprofile from "../micro-components/Kryptprofile";
import Nav from "../core-components/Nav";
import {Link, useParams} from "react-router-dom";
import Profilebox from "../macro-components/Profilebox";
import {ReactComponent as Settings} from "../svg/Setting.svg"
import Axios from 'axios';
import {useState, useEffect} from 'react';
import ProfileNine from "../img/Rectangle 50.png";

export default function Profile(){

    const {id} = useParams();

    const [profileDetails, setProfileDetails] = useState({})
    const [profileData, setProfileData] = useState([])

useEffect(() => {
    Axios.get(`/profile`)
    .then(function(res){
        // const status = res.data.s;
        // console.log(status)
        console.log(res)
        setProfileData([...res.data.kryptdata]);
        setProfileDetails({...res.data.loggeduser})
      
    })
    .catch(function(error){
        console.log(error);
    })
    .then(function(){

    })
},[])
console.log(profileData)
console.log(profileDetails)
   
   
    // const profileDetails = {
    //     image : 'img/Rectangle 47.png', 
    //     username : '@ahm_ehiz',
    // }

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
        image = {ProfileNine}
        username = {profileDetails.username}
        imgstyle={imgstyle}
        boxstyle= {boxstyle}
        textsize= {textsize}
         />
        <Link to="/settings" className="setin">
        <Settings />
           <p className="ml-2">Settings</p>
        </Link>

        <section className="flex w-full justify-center">
            <button className="pro-bttn">dekrypts</button>
            <button className="pro-bttn-dormant">my krypts</button>
        </section>
        <section className="mb-16 w-full overflow-auto">
      {profileData.map(proData=> <Profilebox
        time={profileData.time}
        date={profileData.date}
        title={proData.title}
      />)}
        </section>
       

        <Nav 
             home={navcolor.home}
             notification={navcolor.notification}
             profile={navcolor.profile}
        />

        </div>
    )
}