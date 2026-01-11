import './App.css'
import Heading from './components/heading';
import Add_to_do from  './components/add_to'
import Todosection from './components/Todosection'
import WelcomeMessage from './components/welcomeMessage';
import WarningMessage from './components/warning_message';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { TodoItemcontextProvider } from './store/todo-items-store';

function App() {
  
  return(
  <TodoItemcontextProvider>
    <center className = "todo-container outer">
      <Heading></Heading>
      <Add_to_do></Add_to_do>
      <WarningMessage></WarningMessage>
      <WelcomeMessage></WelcomeMessage>
      <Todosection ></Todosection>
    </center>
  </TodoItemcontextProvider>
  );
}

export default App;
