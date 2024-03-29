import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import {ReactComponent as Edit} from '../svg/bx_edit.svg'
import Axios from 'axios';
import { useNavigate} from 'react-router-dom';
import {useState} from 'react';

export default function Settings(){

    const navigate = useNavigate();

    const [profileData, setProfileData] = useState([])

    Axios.get('/settings')
    .then(function(res){
        const status = res.data.status;
        console.log(status)
        console.log(res)
        setProfileData([...res.data]);
      
    })
    .catch(function(error){
        console.log(error);
    })
    .then(function(){

    })

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
            <Edit />


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