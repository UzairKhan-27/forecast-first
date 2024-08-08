import { arrayProjects, saveToStorage } from ".";
import { displayProjectList } from "./displayProjectList";

function createNewProject(event)
{
    let user=prompt("Enter New Project Name");
    if (user.trim()===""||user===null)
        return;
    arrayProjects.push(user);
    saveToStorage();
    displayProjectList();
}
export{createNewProject}