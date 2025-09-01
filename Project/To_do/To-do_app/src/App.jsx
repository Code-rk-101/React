import './App.css'
import Heading from './components/heading';
import Add_to_do from  './components/add_to'
import Item1 from './components/Item1';
import Item2 from './components/Item2';

function App() {
   return(
    <center class = "todo-container outer">
      <Heading></Heading>
      <Add_to_do/>
      <Item1></Item1>
      <Item2></Item2>
    </center>
  ) 
}

export default App;
