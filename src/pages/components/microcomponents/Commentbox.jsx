export default function Commentbox(){
 const date = new Date();
const minutes = date.getMinutes();
const hours = date.getHours();

const postTime = `${hours}:${minutes}`

    return(
        <section className="w-full text-white py-4 px-8" >
       <div className="flex items-start">
        <img className="w-8 rounded-full border-2 border-white mr-3" src="img/Rectangle 46.png" alt="" />
            <div className="flex flex-col">
                <p className="text-secondary-400 text-xs mb-1">@jonjoshelvey</p>
                <p className="text-sm text-white">This is who we are</p>
            </div>
       </div>
        
        <div className="flex justify-between mt-2 mb-2">
            <p className="text-xs">{postTime}</p>
            <div className="flex items-center">
                <svg  className="mr-1" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5042 11.559H15.5131" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.4952 11.559H11.5042" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.48621 11.559H7.49521" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6359 18.2158C15.5808 21.2723 11.0544 21.9327 7.35113 20.22C6.80443 19.9999 3.26595 20.9799 2.49816 20.213C1.73037 19.4451 2.71121 15.9061 2.49113 15.3594C0.777665 11.6566 1.43893 7.1286 4.49502 4.0731C8.39629 0.170296 14.7346 0.170296 18.6359 4.0731C22.5452 7.98192 22.5371 14.314 18.6359 18.2158Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                 <p className="text-xs">reply</p>
            </div>
        </div>
        <hr />
        </section>
    )
}