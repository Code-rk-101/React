import { useContext } from 'react';
import TodoItemsFromContext from '../store/todo-items-store';

import style from './WelcomeMessage.module.css'

function WelcomeMessage()
{
   const {todoitems}= useContext(TodoItemsFromContext);
    
    return (todoitems.length === 0 && <p className={style.msg} >Enjoy your day.</p>);
};

export default WelcomeMessage;