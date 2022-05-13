import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import {Link} from "react-router-dom";
import {ReactComponent as Choices} from "../svg/fluent_quiz-new-48-filled.svg"
import {ReactComponent as Password} from "../svg/fluent_password-16-filled.svg"
import {ReactComponent as Quiz} from "../svg/healthicons_i-exam-multiple-choice.svg"


export default function Setlock (){

    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    return (
        <div className="page">
            <Header />
            <section className="flex flex-col items-center pt-40">
           
          <button className="lock-bttn" value="Passcode">
          <Link to="/passcode">
            <Password />
            <p className="self-center ml-4">Passcode</p>
         </Link>
          </button>
          

        <button className="lock-bttn" value="Quiz">
        <Link to="/quiz" >
            <Quiz />
            <p className="self-center ml-4">Quiz</p>
        </Link>
        </button>
       
        <button className="lock-bttn" value="Multiple">
        <Link to="/choice">
           <Choices />
          <p className="text-xs ml-4">Multiple Choice Questions</p>
        </Link>
        </button>
       

      
            </section>
         
            <Nav
             home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile} />
        </div>
    )
}