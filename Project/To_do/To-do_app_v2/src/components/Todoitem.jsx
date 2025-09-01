import style from './Todoitem.module.css'

function TodoItem ({task,Duedate})
{
  return <>
    <div className = "row">

      <div className={`col-sm-5 ${style.align}`}>
        {task}
      </div>

      <div className={`col-sm-5 ${style.align}`}>
        {Duedate}
      </div>

      <div className="col-sm-2">
        <button type="button" className="btn btn-danger My_btn">Delete</button>
      </div>

    </div>

  </>
}

export default TodoItem;