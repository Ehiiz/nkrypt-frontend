import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import {Link, useParams, useNavigate} from "react-router-dom";
import {ReactComponent as Key} from "../svg/carbon_password.svg"
import {useEffect, useState} from 'react';
import Axios from "axios";

export default function Answerpass(){

    const [answerPass, setAnswerPass] = useState()
    const [title, setTitle] = useState()
    const [userAnswer, setUserAnswer] = useState([{answer:""}])
  
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() =>{
        Axios.get(`/p-unlock/${id}`)
        .then(function(response){
            console.log(response);
            const newtitle = response.data.data.kryptDeets.title
            setTitle(newtitle)
        
        })
        .catch(function (error) {
            // handle error
            console.log(error + "This did not get anything");
          })
          .then(function () {
            // always executed
          });    

    },[])

    const handleChange = e => {
        const {name, value} = e.target
        
        setUserAnswer([{[name]: value}])
    }

    console.log(userAnswer)

    const handleSubmit = () => {
        const payload = {userAnswer}

        Axios.post(`/p-unlock/${id}`, payload)
        .then(function (response) {
            if (response.status === 'success'){
                navigate(`/share/${id}`)
            }
            else {
                window.location.reload();
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error + "This did not get anything");
          })
          .then(function () {
            // always executed
          });  
    }

    //Color For Navigation Bar
    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }



    return(
    <div className="page">
    <Header />
    <section className="flex flex-col px-4 py-4 mt-12 fixed top-0 mb-8 w-full bg-secondary-600 h-full">
     <h2 className="self-end font-bold text-secondary-900 text-2xl"><span className="text-md font-bold">unlock</span> {title}</h2> 

    <section className="text-white rounded-t-2xl flex flex-col bg-secondary-500 w-full mt-1 pt-4 px-4 pb-8 h-full">
        <div className="flex flex-col">
        <label className=" mt-3 self-start pl-2 mb-10 text-lg" htmlFor="passcode">Enter The Passcode the Unlock</label>
        <input onChange={handleChange} className="rounded-2xl border-2 bg-secondary-500 placeholder:pl-4 h-10 shadow-sm border-white" type="password" name="answer" placeholder="Enter krypt passcode" />
         </div>


   
            <button onClick={handleSubmit} className=" shadow border-4 border-white text-secondary-500 self-center w-fit  bg-secondary-100 rounded-full py-4 px-4 font-bold flex mt-4 "> 
         <Key />
         <p className="ml-2">
         Unlock Krypt
         </p>
        </button>
   
    
    
    
    
    </section>

    </section>

   
    <Nav
           home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}
         />

    </div>
    )
}