import { arrayTodo } from "."
import { displayTodo } from "./displayTodo";

function displayToday()
{
    const newArray=arrayTodo.filter(checkDueDateStatus);
    console.log(newArray)
    displayTodo(newArray);
}
function checkDueDateStatus(todo)
{

    let currentDate=getTodayDate();
    console.log(currentDate);

    return todo.dueDate===currentDate && todo.complete===false;
}
function getTodayDate()
{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    return `${year}-${month}-${day}`;
}
export {displayToday}