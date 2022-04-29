import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../core-components/Header"
import Multi from "../macro-components/Multi"
import Nav from "../core-components/Nav"


export default function Choice(){

    const [multibox, setMultibox] = useState([{quest:"", opt1:"friday", opt2:"", opt3:"",  answer:""}])

    const addMulti = () => {
        setMultibox([...multibox, {quest:"", opt1:"", opt2:"", opt3:"", answer:""}])
      }

      // const [multipleQue, setMultipleQue] = useState({ quest:"", opt1:"", opt2: "", opt3:"",  answer:  ""})


      //  console.log(multipleQue);
      // const updateMultipleQue = (e) => {
      //     const {name, value, type, checked} = e.target;
      //      setMultipleQue({...multipleQue,  [name] : value} )
      //     console.log(value); 
      // }
    
      const handleChange = (i,e) =>{
        let newMultibox = [...multibox];
        console.log(e.target)
        console.log(e.target.value)
        newMultibox[i][e.target.name] = e.target.value;
        setMultibox(newMultibox)
        console.log(multibox)
      }

     
      const removeQuestion = (i) => {
        let newMultibox = [...multibox];
        newMultibox.splice(i,1);
        setMultibox(newMultibox);
     }
  

      const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }


    return (
        <div>
          <div className="page">
        <Header />
        <section className="choice-sec">
        <div className="w-full flex flex-col items-center">
        {multibox.map((multi, index) => (<Multi
           number = {index + 1}
           index ={index}
           opt1={multibox.opt1}
           opt2={multibox.opt2}
           opt3={multibox.opt3}
           answer={multibox.answer}
           quest={multibox.quest}
           handleChange={handleChange}
         

        />))}

        </div>

        <div>
        <svg onClick={addMulti} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 2.1875C13.454 2.23631 9.58754 3.86526 6.7264 6.7264C3.86526 9.58754 2.23631 13.454 2.1875 17.5C2.23631 21.546 3.86526 25.4125 6.7264 28.2736C9.58754 31.1347 13.454 32.7637 17.5 32.8125C21.546 32.7637 25.4125 31.1347 28.2736 28.2736C31.1347 25.4125 32.7637 21.546 32.8125 17.5C32.7637 13.454 31.1347 9.58754 28.2736 6.7264C25.4125 3.86526 21.546 2.23631 17.5 2.1875V2.1875ZM26.25 18.5938H18.5938V26.25H16.4062V18.5938H8.75V16.4062H16.4062V8.75H18.5938V16.4062H26.25V18.5938Z" fill="#5744B7"/>
        <path d="M26.25 18.5938H18.5938V26.25H16.4062V18.5938H8.75V16.4062H16.4062V8.75H18.5938V16.4062H26.25V18.5938Z" fill="white"/>
        </svg>

        </div>
      

        <button className="sub-bttn"> 
         <Link to="/success">
         Submit
         </Link>
        </button>

        </section>
      
        <Nav 
              home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}
        />
       
        </div>
        
        </div>
    )
}