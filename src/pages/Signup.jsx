import {Link} from "react-router-dom";
import FormInput from "../micro-components/FormInput";
import Socials from "../macro-components/Socials";

export default function Signup(){

    const contacts =[
        {placeholder: 'John', 
        type: 'email',
        name:'email'
    },
    
    {placeholder: '@jojoshelvy', 
    type: 'text',
    name: 'username'
},

    {placeholder: '*******', 
    type: 'password',
    name:'password'},
    
    {placeholder: '*******', 
    type: 'password',
    name:'confirm password'

    }
    ]


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

      
        
        <section className="mt-8 self-center w-full">
        {contacts.map(contact => <FormInput
            placeholder={contact.placeholder}
            type={contact.type}
            name={contact.name}
        />)}
        </section>

       <button className="landing-bttn self-center mt-4 mb-16">Sign Up</button>
      
    
        <section className="self-center mb-4">
        <Socials />
        </section>
    
        </div>
        
    )
}