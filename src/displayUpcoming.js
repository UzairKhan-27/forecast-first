import { arrayTodo } from ".";
import { getTodayDate } from "./displayToday";
import { displayTodo } from "./displayTodo";

function displayUpcoming()
{
    const newArray=arrayTodo.filter(checkUpcomingStatus);
    console.log(newArray)
    displayTodo(newArray);
}

function checkUpcomingStatus(todo) 
{
    const today = new Date(Date.now());
    const sevenDaysAhead = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const dueDate = new Date(todo.dueDate);
    console.log("me so "+dueDate);
    console.log(today);
    console.log(sevenDaysAhead);
    return dueDate >= today && dueDate <= sevenDaysAhead && todo.complete===false;
}
export{displayUpcoming}