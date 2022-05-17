import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../core-components/Header"
import Multi from "../macro-components/Multi"
import Nav from "../core-components/Nav"
import {ReactComponent as Add} from "../svg/carbon_add-filled.svg"
import Axios from 'axios';


export default function Choice(){

  const {id} = useParams();
  const navigate = useNavigate();

    const [multibox, setMultibox] = useState([{question:"", option1:"", option2:"", option3:"", option4:"",  answer:""}])

    const addMulti = () => {
        setMultibox([...multibox, {question:"", option1:"", option2:"", option3:"", option4:"", answer:""}])
      }


      const sendData = () => {
        const payload = {multibox}
        console.log(multibox);
        console.log(payload);
        Axios.post(`/choice/${id}`, payload)
      .then(res => {
              console.log(res);
              const status = res.data.status;
              if (status === "success"){
                  navigate(`/share/${id}`)
                  }
                  else{
                     window.location.reload();
                  }
          }).catch(error => {
              console.log(error);
          })
    }

      const handleChange = (i,e) =>{
        let newMultibox = [...multibox];
        console.log(e.target.value)
        newMultibox[i][e.target.name] = e.target.value;
        setMultibox(newMultibox)
        console.log(multibox)
      }

      const handleSubmit = (e) => {
        sendData();
      }

      console.log(multibox);

     
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
        <h1 className="text-white text-lg">Click on one of the buttons below the options to select an answer</h1>
        {multibox.map((multi, index) => (<Multi
           number = {index + 1}
           index ={index}
           option1={multi.option1}
           option2={multi.option2}
           option3={multi.option3}
           option4={multi.option4}
           answer={multi.answer}
           question={multi.question}
           handleChange={handleChange}
         

        />))}

        </div>

        <div onClick={addMulti}>
        <Add />

        </div>
      

        <button className="sub-bttn" onClick={handleSubmit}> 
         Submit
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