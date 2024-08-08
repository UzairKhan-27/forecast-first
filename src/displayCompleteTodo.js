import { arrayTodo } from "."
import { displayTodo } from "./displayTodo";

function displayCompleteTodo()
{
    const newArray=arrayTodo.filter(checkCompleteStatus);
    console.log(newArray)
    displayTodo(newArray);
}
function checkCompleteStatus(todo)
{
    return todo.complete===true;
}
export {displayCompleteTodo}