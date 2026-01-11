import style from './add_to.module.css'
import { useState,useRef } from 'react';


function Add_to_do ({handleOnClick})
{
  const [id,setId] = useState(1);
  const taskVal = useRef();
  const dueDateVal = useRef();

  const handleAddButtonClicked = ()=>
  {
    const currTaskVal = taskVal.current.value;
    const currDueDateVal = dueDateVal.current.value;

      handleOnClick(currTaskVal,currDueDateVal,id);
      taskVal.current.value = "";
      dueDateVal.current.value = "";
      setId(id+1);
  }

  return(
    <div className="row align">
      <div className="col-sm-5">
        <input className = {style.inp} type="text" placeholder='Enter the task' 
        ref = {taskVal}
        />
      </div>

      <div className="col-sm-5">
        <input className = {style.inp} type="date"
        ref = {dueDateVal}
        />
      </div>

      <div className="col-sm-2">
        <button type="button" className="btn btn-success My_btn"
        onClick = {handleAddButtonClicked}
        ><i className="bi bi-plus-square-fill"></i>
        </button>
      </div>
    </div>
  )
}

export default Add_to_do;