import {Link} from "react-router-dom";
import Socials from "../macro-components/Socials";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Signup(){

    const [userDetail, setUserDetail] = useState({username:"", email:"", password:"", verify:""})
    const [passError, setPassError] = useState(false);
    const [passEmail, setPassEmail] = useState(false);
    const [emailLength, setEmailLength] = useState(false);
    const [passWell, setPassWell] = useState(false);
    const [usersDeets, setUsersDeets] = useState([]);
    const [userExists, setUserExists] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [submitBttn, setSubmitBttn] = useState(false)

    useEffect(() => {
        Axios.get("/home")
        .then(function (response) {
            setUsersDeets([...response.data.data])
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function(){

        })
    },[])


    const handleSubmit = e => {
        console.log("This works")
        e.preventDefault();

        const {email, username, password} = userDetail
        console.log(email, username, password)

        const payload = {
           
            userData: {email, username, password}
        }

        Axios.post('http://localhost:4000/signup', payload)
            .then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            })


    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [email, setEmail] = useState({
        error: false,
        value: ""
      });
    
      const handleChange2 = (e) => {
        // Trim value & convert to lowercase
        const value = e.target.value.trim().toLowerCase();
    
        // Test if email is valid
        const isValidEmail = re.test(value);
    
        setEmail({
          value,
          error: !isValidEmail
        });
      };



    const handleChange = (e) =>{
        setUserDetail({...userDetail, [e.target.name]: e.target.value})
     
        if(e.target.name === "verify"){
            if(e.target.value !== userDetail.password){
                setPassError(true);
            }
            else if(e.target.value === userDetail.password){
                setPassError(false);
            }
        }
        
        if(e.target.name === "email"){
            usersDeets.map(userDeet =>{
                if (userDeet.email === e.target.value){
                    setPassEmail(true)
                }
                else if (userDeet.email !== e.target.value){
                    setPassEmail(false)
                }
            })

            if(e.target.value === ""){
                setEmailLength(true)

            }
            else{
                setEmailLength(false)
            }

        }

        else if(e.target.name === "password"){
            if(e.target.value !== userDetail.verify){
                setPassError(true);
            }
            else if(e.target.value === userDetail.verify){
                setPassError(false);
            }

            if(e.target.value.length < 10){
                setErrorMessage(true)
            }
            else if(e.target.value.length >= 10){
                setErrorMessage(false)
            }

            if(passError === false && errorMessage === false){
                setSubmitBttn(true)
            }
            else{
                setSubmitBttn(false)
            }
        }
      
       
    }

    console.log(passError)
    console.log(errorMessage)
    console.log(passEmail)
    console.log(emailLength)

    

    console.log(userDetail);



    return(
        <div className="signed">
        <section className="mb-8 mt-8 self-left">
            <p className="text-xl text-white font-bold mb-0">Share</p>
            <p className="text-xl text-white font-bold mb-0 mt-0">Socialize</p>
            <h2 className="text-5xl text-secondary-100 font-bold">Krypt</h2>
            <p className="text-white text-xs font-light italic mt-2">a new way to engage</p>
        </section>


        <section className="flex justify-between mt-8">
            <button className="dormant">
           <Link to="/">Login</Link>
            </button>

            <button className="active">
            <Link to="/signup"> Signup</Link>
            </button>
        </section>

      
        
        <form className="mt-8 self-center w-full">
        <div className="w-full mb-4">
            <input 
            className="form" 
            type="text" 
            name="email" 
            placeholder="Jaycass50@gmail.com" 
            onChange={handleChange}/>
            <label className="text-sm block text-white" htmlFor="">email</label>
            {passEmail && <span className="text-xs block text-secondary-100">email already in use</span>}
            {emailLength && <span className="text-xs block text-secondary-100">email field cannot be empty</span>}
            {email.error && <span className="text-xs block text-secondary-100">please enter a valid email</span>}
        </div>
        <div className="w-full mb-4">
            <input 
            className="form" 
            name="username" 
            type="text" 
            placeholder="@ahm_ehiz" 
            onChange={handleChange}/>
            <label className="text-sm block text-white" htmlFor="username">username</label>
            {passError && <span className="text-xs block text-secondary-100">username is already taken</span>}
        </div>
        <div className="w-full mb-4">
            <input 
            className="form" 
            name="password" 
            type="password" 
            placeholder="********" 
            onChange={handleChange}/>
            <label className="text-sm block text-white" htmlFor="">password</label>
            {passError && <span className="text-xs block text-red-600">must 
            include at least a letter, a number and one unique symbol</span>}
            {errorMessage && <span className="text-xs block text-red-600">must be 
            more than 10 characters</span>}
        </div>
        <div className="w-full mb-4">
            <input 
            className="form" 
            name="verify" 
            type="password" 
            placeholder="confirm password" 
            onChange={handleChange}/>
            <label className="text-sm block text-white" htmlFor="">confirm password</label>
            {passError && <span className="text-xs text-red-600">passwords do not match</span>}
        </div>
        </form>
        
        {/* {passError === false ? 'form' : 'text-lg bg-black'} */}

       <button onClick={handleSubmit} className="landing-bttn self-center mt-4 mb-16">Sign Up</button>


        
    
        <section className="self-center mb-4">
        <Socials />
        </section>
    
        </div>
        
    )
}