import { useState } from "react";
import Header from "../core-components/Header";
import Nav from "../core-components/Nav";
import Questions from "../macro-components/Questions";
import {Link} from "react-router-dom";
import {ReactComponent as Add} from "../svg/carbon_add-filled.svg"

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


        <div onClick={addQuestion}>

        <Add  />
      
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