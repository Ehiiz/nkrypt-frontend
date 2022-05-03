import {ReactComponent as Comment} from "../svg/Chat.svg"

export default function Commentbox(){
 const date = new Date();
const minutes = date.getMinutes();
const hours = date.getHours();

const postTime = `${hours}:${minutes}`

    return(
        <section className="w-full text-white py-4 px-8" >
       <div className="flex items-start">
        <img className="img-com" src="img/Rectangle 46.png" alt="" />
            <div className="flex flex-col">
                <p className="text-secondary-400 text-xs mb-1">@jonjoshelvey</p>
                <p className="text-sm text-white">This is who we are</p>
            </div>
       </div>
        
        <div className="flex justify-between mt-2 mb-2">
            <p className="text-xs">{postTime}</p>
            <div className="flex items-center">
               <Comment />
                 <p className="text-xs ml-1">reply</p>
            </div>
        </div>
        <hr />
        </section>
    )
}