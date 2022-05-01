import {useState} from "react";
import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Text from "../bttns/Text";
import Audio from "../bttns/Audio";
import Photo from "../bttns/Photo";
import {Link} from "react-router-dom";

export default function Createkrypt(){

  //State Management for Content Type
  const [krypt, setKrypt] = useState(["none"])

  //State Management for Content Added
  const [kryptData, setKryptData] = useState({title:"", content:""})


  // Button Functions for Adding Content Type

const addImage =()=>{
  setKrypt([...krypt, "image"])
 }

 const addText =()=>{
   setKrypt([...krypt, "text"])
 }

 const addAudio =()=>{
   setKrypt([...krypt, "audio"])
 }
 


  //Onchange Function for Inputs
    const updateKryptData = e => {
    const {name, value} = e.target;
    setKryptData({...kryptData, [name] :value})
      
    console.log(value)

    }


  //Navigation Colors
    const navcolor = {
      home:"fill-primary",
      notification:"fill-secondary-900",
      profile:"fill-secondary-900",
  }




    return(
     <div className="page">
      <Header />
     <section className="create">
           <div className="w-full flex flex-col">
                <input className="self-left create-title text-white" type="text" placeholder="Title" value={kryptData.title} name="title" onChange={updateKryptData} />
                <textarea className="create-area" name="content"  value={kryptData.content} id="" cols="30" rows="10" placeholder="Start typing" onChange={updateKryptData}/>



                 {krypt.map(kry=>{if(kry === "image"){
                  return   <input type="file" name="audio" id="audio" className="self-center text-lg bg-primary mt-2 rounded-full text-white px-4 py-4 w-128"  placeholder="Upload your music"  />
                 }
                 else if(kry === "audio"){
                   return   <input type="file" name="audio" id="audio" className="self-center text-lg bg-primary mt-2 rounded-full text-white px-4 py-4 w-128"  placeholder="Upload your music"  />
                

                 }
                 else if(kry=== "text"){
                  return <textarea className="create-area mt-2" name="content"  value={kryptData.content} id="" cols="30" rows="10" placeholder="Add more text" onChange={updateKryptData}/>
                 }

                 })}
           </div>

           

              {/*Button Section  */}
           <div className="flex">
                  <Audio
                  addAudio = {addAudio}
                   />
                  <Text
                  addText = {addText}/>
                  <Photo 
                    addImage = {addImage}
                  />
            </div>

          
            <button className="mt-2 shadow border-1 def-bttn"> 
              <Link to="/setlock">Submit</Link>
             </button>
      </section>

          
         
           <Nav 
                home={navcolor.home}
                notification={navcolor.notification}
                profile={navcolor.profile}
            />

      </div>
    )
}