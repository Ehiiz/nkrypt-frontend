import {useState} from "react";
export default function Multi({number, index, opt1, opt2, opt3, answer, quest, handleChange}) {

    
    


      return (
        <section className="multi-sec" key={index}>
        <p className="multi-num">{number}</p>
        <div className="flex flex-col">
        
        <input 
        className="quest" 
        type="text" 
        name="quest" 
        placeholder="Type in your question" 
        value={quest} 
        onChange={e =>handleChange(index, e)}

        />
        
        <label 
        className="self-end pr-2"
         htmlFor="quest">Question
        </label>
       
        
        </div>

        <section>
        <div className="multi-tab">
        <input 
            className="multi-input" 
            type="text" 
            name="opt1" 
            placeholder="Type in your answer" 
            value={opt1} 
            onChange={e =>handleChange(index, e)}

        />
    

        <label 
            className="self-end pr-2" 
            htmlFor="opt1">
            Option 1
        </label>
        </div>
        <div className="multi-tab">
        
        <input 
            className="multi-input" 
            type="text" 
            name="opt2" 
            placeholder="Type in your answer" 
            value={opt2} 
            onChange={e =>handleChange(index, e)}
            />
 

        

        <label 
            className="self-end pr-2" 
            htmlFor="opt2">
            Option 2
        </label>
        </div>
        <div className="multi-tab">
        
        <input 
            className="multi-input" 
            type="text" 
            name="opt3" 
            placeholder="Type in your answer" 
            value={opt3} 
            onChange={e =>handleChange(index, e)}
          />

        
       
        <label 
             className="self-end pr-2" 
             htmlFor="opt3">
             Option 3
        </label>
        </div>
        <div className="multi-tab">
        <input 
            className="multi-input2" 
            type="text" 
            name="answer" 
            placeholder="Type in your answer" 
            value={answer} 
            onChange={e =>handleChange(index, e)}
        />
       
        <label 
            className="self-end  text-white text-lg  rounded-full mt-1 font-bold" 
            htmlFor="opt4">
           Answer
        </label>
        </div>

        </section>
        
        </section>
    )
}