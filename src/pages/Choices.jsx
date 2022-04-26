import { useState } from "react"
import Header from "./components/Header"
import Multi from "./components/Multi"
import Nav from "./components/Nav"


export default function Choice(){

    const [multibox, setMultibox] = useState([<Multi />])

    const addMulti = () => {
        setMultibox([...multibox, <Multi />])
      }

      const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }


    return (
        <div>
          <div className="bg-secondary-500 w-full h-screen">
        <Header />
        <section className="flex flex-col bg-secondary-600 pt-20 w-full items-center px-4 pb-24">
        <div id="q-box" className="w-full flex flex-col items-center">
        {multibox}
        </div>

        <button  onClick={addMulti} className="mt-2 shadow border-1 border-white text-secondary-500 bg-secondary-100 rounded-xl py-4 px-5 font-bold"> 
           Add Question
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