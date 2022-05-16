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

    const [multibox, setMultibox] = useState([{quest:"", opt1:"friday", opt2:"", opt3:"",  answer:""}])

    const addMulti = () => {
        setMultibox([...multibox, {quest:"", opt1:"", opt2:"", opt3:"", answer:""}])
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