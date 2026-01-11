function ErrorMessage({list})
{
    let show ="";
    if(list.length === 0)
    {
        show = "I am still Hungry";
    }
    return <h3>{show}</h3>
}

export default ErrorMessage;