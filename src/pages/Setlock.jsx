import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as Choices} from "../svg/fluent_quiz-new-48-filled.svg"
import {ReactComponent as Password} from "../svg/fluent_password-16-filled.svg"
import {ReactComponent as Quiz} from "../svg/healthicons_i-exam-multiple-choice.svg";
import {useState, useEffect} from 'react';
import Axios from "axios"
import {useParams} from 'react-router-dom';



export default function Setlock (){

    const {id} = useParams();
    const navigate = useNavigate();

    const [lockValue, setLockValue] = useState("")
    const [finalValue, setFinalValue] = useState()

    console.log(lockValue)


    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

  //Data Posting Function
  useEffect(() => {
    const payload = {finalValue}
    console.log(finalValue);
    console.log(payload);
    Axios.post(`/setlock/${id}`, payload)
    .then(res => {
        console.log(res);
        const next = res.data.lockkrypt.type;
        if(next === "quiz"){
            navigate(`/quiz/${id}`)
        } else if (next === "passcode") {
            navigate(`/passcode/${id}`)
        } else if (next === "multiple"){
            navigate(`/choice/${id}`)
        }
      }).catch(error => {
          console.log(error);
      })
}, [finalValue]);

    const handleSubmit = e => {   
        setFinalValue(lockValue)
    }

    return (
        <div className="page">
            <Header />
            <section className="flex flex-col items-center pt-40">
           
          <div value="Passcode" className="lock-bttn"  onClick={e=> setLockValue("passcode")}>
            <Password />
            <p className="self-center ml-4">Passcode</p>
          </div>
          

        <div value="Quiz" className="lock-bttn" onClick={e=> setLockValue("quiz")}>
            <Quiz />
            <p className="self-center ml-4">Quiz</p>
        </div>
       
        <div value="Multiple"  className="lock-bttn" onClick={e=> setLockValue("multiple")}>
           <Choices />
          <p className="text-xs ml-4">Multiple Choice Questions</p>
        </div>

        
        <button onClick={handleSubmit} className="mt-2 shadow border-1 sub-bttn"> 
              <Link to="">next</Link>
             </button>
       

      
            </section>
         
            <Nav
             home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile} />
        </div>
    )
}