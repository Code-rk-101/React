import './App.css'
import Heading from './components/heading';
import Add_to_do from  './components/add_to'
import Todosection from './components/Todosection'
import WelcomeMessage from './components/welcomeMessage';
import WarningMessage from './components/warning_message';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const initalTodoItems = [];
  const [todoitems,setTodoItems] = useState(initalTodoItems)
  const [track,setTrack] = useState(false);

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
  const handleOnChange = (taskVal,dueDateVal,i)=>
  {
    if(taskVal && dueDateVal)
    {
      setTrack(false);
      setTodoItems((currValue)=>
      [
        ...currValue,
        {id:i,Task : taskVal,dueDate :dueDateVal} 
      ]
      );
    }
    else
    {
      setTrack(true);
    }
  }

  const handleOnDelete = (id)=>
  {
    const newTodoItems = todoitems.filter(item => item.id != id);
    setTodoItems(newTodoItems);
  }
  const handleOnClickChange= ()=>
  {
    setTrack(false);
  }

  return(
    <center className = "todo-container outer">
      <Heading></Heading>
      <Add_to_do handleOnClick = {handleOnChange}></Add_to_do>
      <WarningMessage track ={track} onClickChange = {handleOnClickChange}></WarningMessage>
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <Todosection items = {todoitems} onDeleteClick = {handleOnDelete}></Todosection>
    </center>
  ) 
}

export default App;
