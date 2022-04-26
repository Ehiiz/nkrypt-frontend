export default function Questions(){


    return(
        <section className="w-full text-white bg-secondary-600 flex flex-col black pt-16 px-4">
        <p className="bg-primary border-2 border-white font-bold text-sm rounded-full mb-2 px-4 py-2 text-white w-fit">1</p>
        <div className="flex flex-col">
        <input className="rounded-2xl bg-secondary-500 placeholder:pl-4 h-10 shadow-md" type="text" name="question1" placeholder="Type in your question" />
        <label className="self-end pr-2" htmlFor="questions">Question</label>
        </div>
        <div className="flex flex-col">
        <input className="rounded-2xl bg-secondary-500 placeholder:pl-4 mt-3 h-10" type="text" name="answer1" placeholder="Type in your answer"/>
        <label className="self-end pr-2" htmlFor="answer">Answer</label>
        </div>
        </section>
    )
}