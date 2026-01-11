function Keys({btnValue,click})
{
    
    return (
        <button type="button" className="key" onClick={()=> click(btnValue)}>{btnValue}</button>
    )
}
export default Keys;