export default function Multi({number}){

    



    return (
        <section className="multi-sec">
        <p className="multi-num">{number}</p>
        <div className="flex flex-col">
        <input className="rounded-2xl bg-secondary-500 placeholder:pl-4 h-10 shadow-md" type="text" name="question1" placeholder="Type in your question" />
        <label className="self-end pr-2" htmlFor="questions">Question</label>
        </div>
        <section>
        <div className="multi-tab">
        <input className="multi-input" type="text" name="answer1" placeholder="Type in your answer"/>
        <input className="self-end" type="radio" />
        <label className="self-end pr-2" htmlFor="answer">Option 1</label>
        </div>
        <div className="multi-tab">
        <input className="multi-input" type="text" name="answer1" placeholder="Type in your answer"/>
        <input className="self-end" type="radio" />
        <label className="self-end pr-2" htmlFor="answer">Option 2</label>
        </div>
        <div className="multi-tab">
        <input className="multi-input" type="text" name="answer1" placeholder="Type in your answer"/>
        <input className="self-end" type="radio" />
        <label className="self-end pr-2" htmlFor="answer">Option 3</label>
        </div>
        <div className="multi-tab">
        <input className="multi-input" type="text" name="answer1" placeholder="Type in your answer"/>
        <input className="self-end" type="radio" />
        <label className="self-end pr-2" htmlFor="answer">Option 4</label>
        </div>

        </section>
      
        </section>
    )
}