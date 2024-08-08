import { arrayProjects } from ".";

function updateProjectDropdown()
{
    const projectList=document.querySelector("#option-project");
    projectList.textContent="";
    for(let i=0;i<arrayProjects.length;i++)
    {
        const option=document.createElement("option");
        option.textContent=arrayProjects[i];
        projectList.appendChild(option);
    }
}
export{updateProjectDropdown}