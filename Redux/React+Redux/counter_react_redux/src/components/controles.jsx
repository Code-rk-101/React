import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls =()=>
{
    const dispatch = useDispatch();
    const inputElement = useRef()

    const handleIncrement = ()=>
    {
        dispatch(
            {
                type:"INCREMENT"
            }
        )
    }

    const handleDecrement = ()=>
    {
        dispatch(
            {
                type:"DECREMENT"
            }
        )
    }

    const handleAdd = ()=>
    {
        dispatch(
            {
                type:"ADD",
                payload: 
                {
                    num: inputElement.current.value
                }
            }
        )
        inputElement.current.value = "";
    }

    const handleSubtract = ()=>
    {
        dispatch(
            {
                type:"SUBTRACT",
                payload: 
                {
                    num: inputElement.current.value
                }
            }
        )
        inputElement.current.value = "";
    }

    const handleOnPrivate = ()=>
    {
        dispatch(
            {
                type:"PRIVATE"
            }
        )
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
                class="btn btn-warning"
                onClick={handleOnPrivate}>
                    Private
                </button>
            </div>
        </>
    );
}
export default Controls;