import Commentbox from "./microcomponents/Commentbox";

export default function Comments(){

return(
    <div className="flex flex-col rounded-t-3xl bg-secondary-500 items-center mt-60 mb-18 pt-4 pb-16">
    <hr className="border-2 border-white rounded-sm w-32 mt-3"/>
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        <Commentbox />
        
    </div>
)

}