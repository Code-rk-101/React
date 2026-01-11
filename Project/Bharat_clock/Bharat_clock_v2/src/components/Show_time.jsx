import { useEffect, useState } from "react";

function Show_time ()
{
    const[date,setDate] = useState(new Date());

    useEffect( ()=>
        {
            
            const intervalId = setInterval(()=>{
                setDate(new Date()); 
            },1000);

            return ()=>
            {
                clearInterval(intervalId);
            }
        }
        ,[]);
    return <p className="para">

        The current time in Bharat at : 
        {date.toLocaleDateString()} -{" "} {date.toLocaleTimeString()}
    </p>
}

export default Show_time;