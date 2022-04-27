import Kryptprofile from "../micro-components/Kryptprofile";

export default function Trending(){

    const profileDetails = [
        {
            image : 'img/Rectangle 47.png', 
            username : '@ahm_ehiz',
    
        },
        {
            image : 'img/Rectangle 46.png', 
            username : '@juga',
    
        },
        {
            image : 'img/Rectangle 43.png', 
            username : '@crazilee',
    
        },
        {
            image : 'img/Rectangle 44.png', 
            username : '@tamiyu',
    
        },
        {
            image : 'img/pasted image 0.png', 
            username : '@kazzi',
    
        },
        {
            image : 'img/pasted image 0 (1).png', 
            username : '@puffboy',
    
        },
        {
            image : 'img/pasted image 0 (2).png', 
            username : '@mojojo',
    
        },
        {
            image : 'img/Rectangle 45.png', 
            username : '@kpekenle',
    
        },
        {
            image : 'img/Rectangle 46.png', 
            username : '@tomisoon',
    
        },
        {
            image : 'img/pasted image 0 (1).png', 
            username : '@blanche',
    
        },
        {
            image : 'img/Rectangle 47.png', 
            username : '@caserita',
    
        },
        {
            image : 'img/pasted image 0.png', 
            username : '@seunowa',
    
        },
        {
            image : 'img/pasted image 0 (2).png', 
            username : '@fofo1',
    
        },   {
            image : 'img/pasted image 0 (1).png', 
            username : '@timmytuna',
    
        },   {
            image : 'img/Rectangle 47.png', 
            username : '@savvy',
    
        },   {
            image : 'img/Rectangle 42.png', 
            username : '@garcia',
    
        },
]

const boxstyle = "home-box"
const imgstyle = "home-image"
const textsize = "text-sm"


    return(
        <div className="flex overflow-x-scroll scrollbar-hide mt-16 px-2 pb-4">
         {profileDetails.map(profile => <Kryptprofile
            image={profile.image}
            username={profile.username}
            boxstyle={boxstyle}
            imgstyle={imgstyle}
            textsize={textsize}
         />)}
            
        </div>
    )
}