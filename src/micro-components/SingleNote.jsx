export default function SingleNote({username, img, message}){


    return (
        <div className="">
         <div className="flex text-white items-center my-2">
           <img className="notif-image" src={img} alt="" />
            <p className="ml-2 text-xs"><span className="text-secondary-400">{username}</span> {message}</p>
        </div>
        <hr />
        </div>
       
    )
}