import SingleNote from "../micro-components/SingleNote";

export default function Notifrow(){

    const profiles = [
        {
            username:'@jimdwayne', 
            img:'img/Rectangle 47.png',
            message:'commented on your krypt'
    
    },
    
    {
        username:'@caseybeckett', 
        img:'img/Rectangle 42.png',
        message:'commented on your krypt'
    },
    {
        username:'@kinsli', 
        img:'img/Rectangle 46.png',
        message:'solved your krypt'
    },
    {
        username:'@fela', 
        img:'img/Rectangle 43.png',
        message:'solved your krypt'
    },
    {
        username:'@ella', 
        img:'img/pasted image 0 (2).png',
        message:'commented on your krypt'
    }
    ,
    {
        username:'@kanji', 
        img:'img/pasted image 0 (2).png',
        message:'commented on your krypt'
    },
    {
        username:'@dami', 
        img:'img/pasted image 0 (1).png',
        message:'commented on your krypt'
    },
    {
        username:'@lanre', 
        img:'img/pasted image 0.png',
        message:'commented on your krypt'
    },
    {
        username:'@kuje', 
        img:'img/pasted image 0 (1).png',
        message:'commented on your krypt'
    },
    {
        username:'@sheerlok', 
        img:'img/pasted image 0 (2).png',
        message:'commented on your krypt'
    },
    {
        username:'@kuku', 
        img:'img/pasted image 0 (1).png',
        message:'commented on your krypt'
    },
    {
        username:'@maree', 
        img:'img/pasted image 0 (2).png',
        message:'commented on your krypt'
    },
    {
        username:'@martha', 
        img:'img/pasted image 0.png',
        message:'commented on your krypt'
    },
    {
        username:'@tucheliban', 
        img:'img/pasted image 0 (1).png',
        message:'commented on your krypt'
    },
    {
        username:'@cruisemaster', 
        img:'img/pasted image 0 (2).png',
        message:'commented on your krypt'
    },
    {
        username:'@tetaa', 
        img:'img/pasted image 0 (1).png',
        message:'commented on your krypt'
    },
    {
        username:'@kunletomi', 
        img:'img/pasted image 0 (2).png',
        message:'commented on your krypt'
    }
    ]


    


    return(
        <div className="mt-16 pt-1 mb-14 pb-2 px-2">
             {profiles.map(profile => <SingleNote
            username={profile.username}
            img={profile.img}
            message={profile.message}
            />
            )}

        </div>
   
    )
}