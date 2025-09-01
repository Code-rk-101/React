import style from './heading.module.css'
function Heading()
{
    return <div>
        <h1 className={style.heading}>To-Do list</h1>
        <h2 className={style.heading}>Add a new task</h2>
    </div> 
}

export default Heading;