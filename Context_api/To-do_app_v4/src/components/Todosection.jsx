import { useContext } from "react";
import TodoItemsFromContext from "../store/todo-items-store";
import TodoItem from "./Todoitem";

function Todosection ()
{
  const {todoitems}= useContext(TodoItemsFromContext);
  return (
    <div className = "Items-container">
      {todoitems.map((Item,i=0) => 
      <TodoItem key = {i+1} id = {Item.id} Duedate = {Item.dueDate} task = {Item.Task} ></TodoItem>)}
    </div>
  );
};
 
export default Todosection;