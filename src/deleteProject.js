import { arrayProjects, arrayTodo, updateArrayTodo,updateArrayProjects,saveToStorage } from ".";
import { displayTodo } from "./displayTodo";

let string="";
function deleteProject(event)
{
    console.log(event.target.id)
    const dialog=document.querySelector("#delete-project-dialog");
    const form=document.querySelector("#delete-project-form");
    const deleteButton=document.createElement("button");
    deleteButton.setAttribute("type","submit");
    deleteButton.setAttribute("id","#submit-delete-project");
    deleteButton.textContent="Delete Selected Projects";
    form.textContent="";


    arrayProjects.forEach((item)=>
    {
        const input=document.createElement("input");
        const label=document.createElement("label");
        const lineBreak=document.createElement("br");

        input.setAttribute("type","checkbox");
        input.setAttribute("id",item);
        input.setAttribute("value",item);
        label.setAttribute("for",item);
        label.textContent=item;

        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(lineBreak);
    })
    form.appendChild(deleteButton);
    deleteButton.addEventListener("click",submitDeleteProject);

    dialog.showModal();
}
function submitDeleteProject(event)
{
    event.preventDefault();

    const dialog=document.querySelector("#delete-project-dialog");
    const form=document.querySelector("#delete-project-form");
    const options=form.querySelectorAll("input");
    let newArrayTodo;
    let newProjectList;
    options.forEach((option)=>{
        console.log(option.id+option.checked);
        string=option.id;
        if(option.checked===true)
        {
            newArrayTodo=arrayTodo.filter(removeSelectedProjectTasks);
            newProjectList=arrayProjects.filter(removeProjectList);
        }
    })
    dialog.close();
    updateArrayTodo(newArrayTodo);
    updateArrayProjects(newProjectList);
    console.log(arrayProjects+"sweet");
    console.log(event.target.id);
    saveToStorage();
    displayTodo(arrayTodo);
}
function removeProjectList(list)
{
    return string !==list;
}
function removeSelectedProjectTasks(todo)
{
    return string!==todo.project
}
export{deleteProject,submitDeleteProject}