import Keys from "./Keys";

function Buttons()
{
    const data = ["7","8","9","+","4","5","6","-","1","2","3","*","00",0,"%","/","C",".","=","AC"];
    return(
        <div className="btns">
            {data.map((keys,i=0)=>
            <Keys key={i+1} btnValue = {keys} />
            )}

        </div>
    );
}

export default Buttons;