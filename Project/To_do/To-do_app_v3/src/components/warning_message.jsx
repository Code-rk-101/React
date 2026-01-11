import style from "./warning_message.module.css"
function WarningMessage ({track,onClickChange})
{
    return (
    <>
        {track=== true && <p className = {style.mess}>Enter the valid details...
        <i className="bi bi-x-circle-fill" onClick ={onClickChange}></i>
        </p>}
    </>
    )
}
export default WarningMessage;