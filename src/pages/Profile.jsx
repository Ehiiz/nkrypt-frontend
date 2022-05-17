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
    const [dekryptData, setDekryptData] = useState([])
    const [bttnLive, setBttnLive] = useState(true)
    const [bttnLive2, setBttnLive2] = useState(false)

useEffect(() => {
    Axios.get(`/profile`)
    .then(function(res){
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

   


    const boxstyle = "profile-box"
    const imgstyle = "profile-image"
    const textsize = "text-sm"

    const navcolor = {
        home:"fill-secondary-900",
        notification:"fill-secondary-900",
        profile:"fill-primary",
    }

    const handleClick = (e) => {
       const {name} = e.target
        if(name === "bttn1"){
            if (!bttnLive){
                setBttnLive2(!bttnLive2)
                setBttnLive(!bttnLive)
            }
           
        }
        else if(name === "bttn2"){
            if(!bttnLive2){
                setBttnLive(!bttnLive)
                setBttnLive2(!bttnLive2)
            }
          
        }

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
            <button className={ bttnLive ? "pro-bttn rounded-tl-2xl" : "pro-bttn-dormant rounded-tl-2xl"} name="bttn1" onClick={handleClick}>dekrypts</button>
          
            <button className={ bttnLive2 ? "pro-bttn rounded-tr-2xl" : "pro-bttn-dormant rounded-tr-2xl"} name="bttn2" onClick={handleClick}>my krypts</button>
        </section>
        <section className="mb-16 w-full overflow-auto">
            {bttnLive && profileData.map(proData=> <Profilebox
               time={profileData.time}
               date={profileData.date}
               title={proData.title}
             />)}  
               {bttnLive2 && profileData.map(proData=> <Profilebox
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