import { arrayTodo } from ".";
import { getTodayDate } from "./displayToday";
import { displayTodo } from "./displayTodo";

function displayMissed()
{
    const newArray=arrayTodo.filter(checkMissingStatus);
    console.log(newArray)
    displayTodo(newArray);
}
function checkMissingStatus(todo)
{
    const today = new Date(Date.now());
    const dueDate = new Date(todo.dueDate);
    console.log("me so "+dueDate);
    console.log(today);
    return dueDate < today && todo.complete===false;
}
export{displayMissed}