function Add_to_do ()
{
    return(<div class="row align">
              <div class="col-sm-5">
                <input type="text" placeholder='Enter the task' />
              </div>

              <div class="col-sm-5">
                <input type="date"/>
              </div>

              <div class="col-sm-2">
                <button type="button" class="btn btn-success My_btn">Add</button>
              </div>
          </div>
    )
}

export default Add_to_do;