import style from './add_to.module.css'

function Add_to_do ()
{
    return(<div className="row align">
              <div className="col-sm-5">
                <input className = {style.inp} type="text" placeholder='Enter the task' />
              </div>

              <div className="col-sm-5">
                <input className = {style.inp} type="date"/>
              </div>

              <div className="col-sm-2">
                <button type="button" className="btn btn-success My_btn">Add</button>
              </div>
          </div>
    )
}

export default Add_to_do;