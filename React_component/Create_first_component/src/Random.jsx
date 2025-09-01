function Random ()
{
    let Number = Math.random()*100;

    return <p style={{backgroundColor : "#16d84dff"}}> Random number is { Math.round(Number)}</p>

}
export default Random;