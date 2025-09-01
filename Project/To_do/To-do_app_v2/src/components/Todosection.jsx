import TodoItem from "./Todoitem";

function Todosection ({item})
{
  return (
    <div className = "Items-container">
      {item.map((Items,i=0) => 
      <TodoItem key = {i+1} Duedate = {Items.dueDate} task = {Items.Task}></TodoItem>)}
    </div>
  );
};

export default Todosection;