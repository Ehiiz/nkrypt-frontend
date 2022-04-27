export default function Questions({number}){


    return(
        <section className="w-full text-white bg-secondary-600 flex flex-col black pt-16 px-4">
        <p className="bg-primary border-2 border-white font-bold text-sm rounded-full mb-2 px-4 py-2 text-white w-fit">{number}</p>
        <div className="flex flex-col">
        <input className="quest shadow-md" type="text" name="question1" placeholder="Type in your question" />
        <label className="self-end pr-2" htmlFor="questions">Question</label>
        </div>
        <div className="flex flex-col">
        <input className="quest mt-3" type="text" name="answer1" placeholder="Type in your answer"/>
        <label className="self-end pr-2" htmlFor="answer">Answer</label>
        </div>
        </section>
    )
}