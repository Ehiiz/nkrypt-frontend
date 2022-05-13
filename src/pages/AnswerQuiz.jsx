import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import {Link} from "react-router-dom";
import QuizAnswerBox from "../macro-components/QuizAnswerBox";
import {ReactComponent as Key} from "../svg/carbon_password.svg"


export default function AnswerQuiz(){


    
    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    const ehisQuestion = [{
        Question: "What is the name of your father's village",
        Answer: "Ubiaja",
        numba : "1"
    },
    {
        Question: "What is my favourite food",
        Answer: "Jollof Rice",
        numba : "2"
    },
    {
        Question: "Where did we have our first sex?",
        Answer: "Lagos",
        numba : "3"
    },
    {
        Question: "What are you always doing?",
        Answer: "Nothing",
        numba : "4"
    },
    {
        Question: "Who killed Romeo",
        Answer: "Oversabi",
        numba : "5"
    },
    {
        Question: "Where was Barney born?",
        Answer: "Yugoslavia",
        numba : "6"
    },
]

    return(
        <div className="page">
        <Header />
        <section className="flex flex-col px-4 py-4 mt-12 fixed top-0 mb-8 w-full bg-secondary-600 h-full">
         <h2 className="self-end font-bold text-secondary-900 text-2xl"><span className="text-md font-bold">unlock</span> GRANDE KRYPT</h2> 
    
        <section className="text-white overflow-auto scrollbar-hide  rounded-t-2xl flex flex-col bg-secondary-500 w-full mt-1 pt-4 px-4 pb-48 h-128">
         {ehisQuestion.map(ehisQ=><QuizAnswerBox
            Question = {ehisQ.Question}
            Answer = {ehisQ.Answer}
            Number = {ehisQ.numba}
             />
         )}
        
        </section>

        <Link to="/unlocked">
            <button className="fixed bottom-20  right-6 shadow border-4 def-bttn flex"> 
          <Key />
          <p className="ml-2">
          Unlock Krypt

          </p>  
           </button>
           </Link>
        
    
        </section>
    
       
        <Nav
               home={navcolor.home}
                    notification={navcolor.notification}
                    profile={navcolor.profile}
             />
    
        </div>
    )
}