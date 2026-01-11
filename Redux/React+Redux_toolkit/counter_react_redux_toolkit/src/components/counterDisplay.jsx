import { useSelector } from "react-redux";

const CounterDisplay = ()=>
{
    const {num} =  useSelector((store)=>store.counter);
    return(
        <p className="lead mb-4">

            Counter Value : {num}
        </p> 
    );
}
export default CounterDisplay;