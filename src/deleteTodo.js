import { arrayTodo, updateArrayTodoID } from ".";
import { getLastCharacter } from "./changeCompleteStatus"
import { displayTodo } from "./displayTodo";


function deleteTodo(event)
{
    let deleteButtonID=getLastCharacter(event.target.id);
    console.log("event dlelet" +event.target.id )
    arrayTodo.splice(deleteButtonID,1);
    updateArrayTodoID();
    displayTodo(arrayTodo);    
}

export {deleteTodo}