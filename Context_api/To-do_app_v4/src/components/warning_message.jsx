import { useContext } from "react";
import TodoItemsFromContext from "../store/todo-items-store";
import style from "./warning_message.module.css"
function WarningMessage ()
{
    const {track,showWarning}= useContext(TodoItemsFromContext);
    return (
    <>
        {track=== true && <p className = {style.mess}>Enter the valid details...
        <i className="bi bi-x-circle-fill" onClick ={showWarning}></i>
        </p>}
    </>
    )
}
export default WarningMessage;