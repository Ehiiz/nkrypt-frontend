import { useState } from "react";
import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Questions from "../macro-components/Questions";
import {Link} from "react-router-dom";

export default function Quizpage(){




//   const [values, setValues] = useState({ val: []});

//   function createInputs() {
//     return values.val.map((el, i) =>
//       <div key={i}>
//         <input className="text-black mb-4 border-red-300 " type="text" value={el||''} onChange={handleChange.bind(i)} />
//         <input type='button' value='remove' name={i} onClick={removeClick.bind(i)} />
//       </div>
//     );
//   }

// function handleChange(event) {
//   let vals = [...values.val];
//   vals[this] = event.target.value;
//   setValues({ val: vals });
//   console.log(values);
// }

// const addClick = () => {
//   setValues({ val: [...values.val, '']})
// }

// const removeClick = (event) => {
//   let vals = [...values.val];
//   let index = Number(event.target.name);
//   vals.splice(index, 1);
//   setValues({ val: vals });
// }

// const handleSubmit = event => {
//   alert('A name was submitted: ' + values.val.join(', '));
//   event.preventDefault();
// }

// return (
//   <form className="w-full text-white bg-secondary-600 h-screen flex flex-col items-center" onSubmit={handleSubmit}>
//       {createInputs()}
//       <input type='button' value='add more' onClick={addClick} />
//       <input type="submit" value="Submit" />
//   </form>
// );



//Original App code


    const [questionBox, setQuestionBox] = useState([{ques: "", ans:"", answer:""}])
    const navcolor = {
        home:"fill-primary",
        notification:"fill-secondary-900",
        profile:"fill-secondary-900",
    }

    const addQuestion = () => {
      setQuestionBox([...questionBox, {ques:"", ans:""}])
    }

    const handleChange = (i,e) =>{
      let newQuestionBox = [...questionBox];
      newQuestionBox[i][e.target.name] = e.target.value;
      setQuestionBox(newQuestionBox)
      console.log(questionBox)
    }

    const removeQuestion = (i) => {
      let newQuestionBox = [...questionBox];
      newQuestionBox.splice(i,1);
      setQuestionBox(newQuestionBox)
;    }


    return(
        
        <div className="page">
        <Header />
        <section className="flex flex-col bg-secondary-600 pt-20 w-full items-center px-4 pb-24">
        <div id="q-box" className="w-full flex flex-col items-center">
        {questionBox.map((question, index) => (
        <section key={index} className="w-full text-white bg-secondary-600 flex flex-col black pt-16 px-4">
        <p className="multi-num">{index+1}</p>
        <div className="flex flex-col">
        <input className="quest shadow-md" type="text" name= "ques" placeholder="Type in your question" 
        value={question.ques} 
        onChange={e => handleChange(index, e)}/>
        <label className="self-end pr-2" htmlFor="ques">Question</label>
        </div>
        <div className="flex flex-col">
        <input className="quest mt-3" type="text" name="ans" placeholder="Type in your answer" 
        value={question.ans} onChange={e => handleChange(index, e)}/>
        <label className="self-end pr-2" htmlFor="ans">Answer</label>
        <input 
         className="self-end" 
         type="radio" 
         name="answer"
         id={question.answer}
         value={question.ans}
         onChange={e => handleChange(index, e)}
        />
        </div>
        {
          index ? <button type="button" onClick={()=> removeQuestion(index)}>Remove</button>
          : null
        }
        </section>
        ))}
        </div>


        <div>
        <svg onClick={addQuestion} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    )
}