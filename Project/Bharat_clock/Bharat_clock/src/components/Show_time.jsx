function Show_time ()
{
    let date = new Date();
    return <p className="para">The current time in Bharat at : {date.toLocaleDateString()} -{" "} {date.toLocaleTimeString()}</p>
}

export default Show_time;