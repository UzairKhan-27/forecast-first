import { arrayTodo } from ".";
import { displayTodo } from "./displayTodo";

function changeCompleteStatus(event)
{

    let checkButtonID=getLastCharacter(event.target.id);
    arrayTodo[checkButtonID].complete=!(arrayTodo[checkButtonID].complete);
    displayTodo(arrayTodo);
}

function getLastCharacter(string)
{
    return string.split('-')[1];
}
export{changeCompleteStatus,getLastCharacter}