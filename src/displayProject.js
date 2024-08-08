import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";
let projectName="";
function displayProject(event)
{
    console.log(event.target.id);
    console.log(event.target.textContent);
    projectName=event.target.textContent;
    const newArray=arrayTodo.filter(findProjectTasks);
    console.log("new array ++ " + newArray);
    displayTodo(newArray);

}
function findProjectTasks(todo)
{
    return todo.project===projectName
}
export{displayProject}