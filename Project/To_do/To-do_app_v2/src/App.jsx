import './App.css'
import Heading from './components/heading';
import Add_to_do from  './components/add_to'
import Todosection from './components/Todosection'

function App() {

  const Todo_item = 
  [
    {
      Task : "Buy Milk",
      dueDate : "4/10/2025",
    },
    {
      Task : "go  to college",
      dueDate : "4/10/2025",
    },
    {
      Task : "wake Up at 5:00 AM",
      dueDate : "5/10/2025",
    },
  ]

  return(
    <center className = "todo-container outer">
      <Heading></Heading>
      <Add_to_do/>
      <Todosection item={Todo_item}></Todosection>
    </center>
  ) 
}

export default App;
