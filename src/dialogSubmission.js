import { arrayProjects, arrayTodo } from ".";
import { lastButtonClicked } from "./addProject";
import { createTodo } from "./createTodo";
import { displayTodo } from "./displayTodo";
import { closeDialog } from "./handleDialog";
import { resetDialog } from "./handleDialog";
import { updateProjectDropdown } from "./updateProjectDropdown";

function handleDialogSubmission(event)
{
    event.preventDefault();
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let dueDate=document.getElementById("dueDate").value;
    let priority=document.getElementById("priority").value;
    let project=document.getElementById("option-project").value;
    if(title==="")
    {
        alert("Fill the title and Due Date");
        return;
    }
    description=(description.trim()==="") ? "NO DESCRIPTION": document.getElementById("description").value
    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(priority);
    console.log(project);
    closeDialog(); 
    resetDialog();
    console.log("me button "+lastButtonClicked);
    arrayTodo.push(createTodo(title,description,priority,dueDate,project,arrayTodo.length ));
    console.log(arrayTodo)
    displayTodo(arrayTodo);
}

export{handleDialogSubmission}