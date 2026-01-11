import { createContext} from "react";
import { useReducer, useState } from 'react';

const TodoItemsFromContext = createContext({
        todoitems: [],
        addNewItem: ()=>{},
        deleteItem: ()=>{},
        showWarning:()=>{},
        track:[]
});
export default TodoItemsFromContext;

const todoItemReducer = (currValue,action)=>{

  let newTodoList = currValue;
  if(action.type==="NEW_ITEM")
  {
    newTodoList =
      [
        ...currValue,
        { 
          id:action.payload.i,
          Task : action.payload.taskVal,
          dueDate :action.payload.dueDateVal
        } 
      ];
  }
  else if(action.type==="DELETE_ITEM")
  {
    newTodoList = currValue.filter(
      (item) => item.id !== action.payload.i
    );
  }
  return newTodoList;
};

export function TodoItemcontextProvider ({children})
{
  const initalTodoItems = [];
  // const [todoitems,setTodoItems] = useState(initalTodoItems)
  const [track,setTrack] = useState(false);
  const [todoitems,dispatchTodoitems] = useReducer(todoItemReducer,initalTodoItems);

  //Spread operator updates
  // const handleOnChange = (taskVal,dueDateVal,i)=>
  // {
  //   const newTodoItems = 
  //   [
  //     ...todoitems,
  //     {id:i,Task : taskVal,dueDate :dueDateVal} 
  //   ];
  //   setTodoItems(newTodoItems);
  // }

  //Functioal updates
  const addNewItem = (taskVal,dueDateVal,i)=>
  {
    if(taskVal && dueDateVal)
    {
      setTrack(false);
      const newItemAction = 
      {
        type : "NEW_ITEM",
        payload : 
        {
          taskVal :taskVal,
          dueDateVal : dueDateVal,
          i : i
        },
      };
      dispatchTodoitems(newItemAction);
    }
    else
    {
      setTrack(true);
    }
  }

  const deleteItem = (id)=>
  {

    const newItemAction = {
      type : "DELETE_ITEM",
      payload : {
        i : id
      },
    };
    dispatchTodoitems(newItemAction);

  }

  const showWarning= ()=>
  {
    setTrack(false);
  }

  return  <TodoItemsFromContext.Provider 
    value = {
      {
        todoitems: todoitems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
        showWarning:showWarning,
        track:track
      }
    }>
      {children}
    </TodoItemsFromContext.Provider>
}