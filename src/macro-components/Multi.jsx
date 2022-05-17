import {useState} from "react";
export default function Multi({number, index, option1, option2, option3, option4, answer, question, handleChange}) {

    console.log(option1)
    var opt1 = option1;
    var opt2 = option2;
    var opt3 = option3;
    var opt4 = option4;
    console.log(opt1, opt2, opt3, opt4);

      return (
        <section className="multi-sec" key={index}>
        <p className="multi-num">{number}</p>
        <div className="flex flex-col">
        
        <input 
        className="quest" 
        type="text" 
        name="question" 
        placeholder="Type in your question" 
        value={question} 
        onChange={e =>handleChange(index, e)}

        />
        
        <label 
        className="self-end pr-2"
         htmlFor="question">Question
        </label>
       
        
        </div>

        <section>
        <div className="multi-tab">
        <input 
            className="multi-input" 
            type="text" 
            name="option1" 
            placeholder="Type in your answer" 
            value={option1} 
            onChange={e =>handleChange(index, e)}

        />
           <input 
            className="mr-4"
            type="radio" 
            name="answer" 
            value={option1}
            onChange={e =>handleChange(index, e)}
        />
    

        <label 
            className="self-end pr-2" 
            htmlFor="option1">
            Option 1
        </label>
        </div>
        <div className="multi-tab">
        
        <input 
            className="multi-input" 
            type="text" 
            name="option2" 
            placeholder="Type in your answer" 
            value={option2} 
            onChange={e =>handleChange(index, e)}
            />

<input 
            className="mr-4"
            type="radio" 
            name="answer" 
            value={option2}
            onChange={e =>handleChange(index, e)}
        />
 

        

        <label 
            className="self-end pr-2" 
            htmlFor="option2">
            Option 2
        </label>
        </div>
        <div className="multi-tab">
        
        <input 
            className="multi-input" 
            type="text" 
            name="option3" 
            placeholder="Type in your answer" 
            value={option3} 
            onChange={e =>handleChange(index, e)}
          />

        <input 
            className="mr-4"
            type="radio" 
            name="answer" 
            value={option3}
            onChange={e =>handleChange(index, e)}
        />

        
       
        <label 
             className="self-end pr-2" 
             htmlFor="option3">
             Option 3
        </label>
        </div>
        <div className="multi-tab">
        <input 
            className="multi-input2" 
            type="text" 
            name="option4" 
            placeholder="Type in your answer" 
            value={option4} 
            onChange={e =>handleChange(index, e)}
        />

<input 
            className="mr-4"
            type="radio" 
            name="answer" 
            value={option4}
            onChange={e =>handleChange(index, e)}
        />

       
        <label 
            className="self-end pr-2" 
            htmlFor="opt4">
           Option 4
        </label>
        </div>

        </section>
        
        </section>

    )
}