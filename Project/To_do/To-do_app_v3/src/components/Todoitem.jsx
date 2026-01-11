import style from './Todoitem.module.css'


function TodoItem ({id,task,Duedate,onDeleteClick})
{
  
  return <>
    <div className = "row align">

      <div className={`col-sm-5 ${style.align}`}>
        {task}
      </div>

      <div className={`col-sm-5 ${style.align}`}>
        {Duedate}
      </div>

      <div className="col-sm-2">
        <button type="button" className="btn btn-danger My_btn"
        onClick = {()=> onDeleteClick(id)}><i className="bi bi-trash"></i></button>
      </div>

    </div>

  </>
}

export default TodoItem;