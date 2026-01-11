import TodoItem from "./Todoitem";

function Todosection ({items,onDeleteClick})
{
  return (
    <div className = "Items-container">
      {items.map((Item,i=0) => 
      <TodoItem key = {i+1} id = {Item.id} Duedate = {Item.dueDate} task = {Item.Task} onDeleteClick = {onDeleteClick} ></TodoItem>)}
    </div>
  );
};
 
export default Todosection;