export default function QuizAnswerBox({Question, Answer, Number}){


    return(
        <section className="w-full text-white flex flex-col black pt-16 px-4">
        <p className="multi-num">{Number}</p>
        <p className="text-white text-md">{Question}</p>
        <div className="flex flex-col">
        <input className="quest mt-3 border-white border-2" type="text" name="ans" placeholder="Type in your answer" 
        value="" />
        <label className="self-end pr-2" htmlFor="ans">Answer</label>
        </div>
        </section>
    )
}