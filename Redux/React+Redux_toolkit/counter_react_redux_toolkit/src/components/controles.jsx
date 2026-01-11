import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction, counterPrivacyAction } from "../store";

const Controls =()=>
{
    const dispatch = useDispatch();
    const Privacy_status = useSelector((store)=>store.privacy_toggle)
    const inputElement = useRef()

    const handleIncrement = ()=>
    {
        dispatch(counterAction.increment(Privacy_status));
    }

    const handleDecrement = ()=>
    {
        dispatch(counterAction.decrement(Privacy_status));
    }

    const handleAdd = ()=>
    {
        dispatch(
            counterAction.add(
                {
                    value: inputElement.current.value,
                    Privacy_status: Privacy_status
                }
            )
        );
        inputElement.current.value = "";
    }

    const handleSubtract = ()=>
    {
        dispatch(
            counterAction.subtract(
                {
                    value: inputElement.current.value,
                    Privacy_status: Privacy_status
                }
            )
        );
        inputElement.current.value = "";
    }

    const handleOnPrivate = ()=>
    {
        dispatch(counterPrivacyAction.switch());
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 

                <button type="button" 
                className="btn btn-primary btn-lg px-4 gap-3"
                onClick={handleIncrement}>
                    +1 
                </button> 
                
                <button type="button" 
                className="btn btn-success btn-lg px-4"
                onClick={handleDecrement}>
                    -1
                </button> 

            </div> 

            <div className="card inp-style">

                <input type="number" 
                placeholder="Enter the Number"
                className="inp_"
                ref={inputElement} />
                
                <button type="button" 
                className="btn btn-secondary btn-lg px-4 gap-"
                onClick={handleAdd}>
                    Add
                </button>

                <button type="button" 
                className="btn btn-dark btn-lg px-4 gap-"
                onClick={handleSubtract}>
                    Subtract
                </button>

            </div>

            <div className="card">
                <button type="button" 
                className="btn btn-warning"
                onClick={handleOnPrivate}>
                    Private
                </button>
            </div>
        </>
    );
}

export default Controls;