export default function MultiAnswerBox({index, Number, answer, Question, Option1, Option2, Option3, handleChange}){

    
    var opt1 = Option1;
    var opt2 = Option2;
    var opt3 = Option3;
    console.log(opt1, opt2, opt3);


    return (

        <section className="multi-sec" key={index}>
        <p className="multi-num">{Number}</p>
        <p className="text-white text-lg">{Question}</p>
        <div className="flex items-center">
        <input 
            className="mr-4"
            type="radio" 
            name="answer" 
            value={opt1}
            onChange={e => handleChange(index, e)}
        />
       
        <label 
            className="text-white text-md mt-1 font-bold" 
            htmlFor="opt4">
      {Option1}
        </label>
        </div>
      
        
        <div className="flex items-center">
        <input 
            type="radio" 
            name="answer" 
            className="mr-4" 
            value={opt2}  
            onChange={e => handleChange(index, e)}
        />
       
        <label 
            className="text-white text-md mt-1 font-bold" 
            htmlFor="opt4">
        {Option2}
        </label>
        </div>
        <div className="flex items-center">
        <input 
            type="radio" 
            name="answer" 
            value={opt3}
            className="mr-4"
            onChange={e => handleChange(index, e)}
            
        />
       
        <label 
            className="text-white text-md mt-1 font-bold" 
            htmlFor="opt4">
          {Option3}
        </label>
        </div>
       
        <div className="flex items-center">
        <input 
            type="radio" 
            name="answer" 
            value={Option3}
            className="mr-4"
            onChange={e => handleChange(index, e)}
         
        />
       
        <label 
            className="text-white text-md mt-1 font-bold" 
            htmlFor="opt4">
      
        </label>
        </div>

        </section>
        
    )
}