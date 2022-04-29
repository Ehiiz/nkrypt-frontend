export default function MultiAnswerBox({index, Number, answer, Question, Option1, Option2, Option3}){


    return (

        <section className="multi-sec" key={index}>
        <p className="multi-num">{Number}</p>
        <p className="text-white text-lg">{Question}</p>
        <div className="flex items-center">
        <input 
            className="mr-4"
            type="radio" 
            name="answer" 
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
            value=""
            className="mr-4"
            
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
            value=""
            className="mr-4"
         
        />
       
        <label 
            className="text-white text-md mt-1 font-bold" 
            htmlFor="opt4">
         {answer}
        </label>
        </div>

        </section>
        
    )
}