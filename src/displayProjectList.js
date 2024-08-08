import { arrayProjects } from ".";
import { updateProjectDropdown } from "./updateProjectDropdown";
function displayProjectList()
{
    const list= document.querySelector(".lists")
    list.textContent="";
    for(let i=0;i<arrayProjects.length;i++){
    const li=document.createElement("li");
    
    li.setAttribute("id",`list${i}`)
    li.textContent=arrayProjects[i];
    list.appendChild(li);
    console.log(arrayProjects);
    }
    updateProjectDropdown();
}
export{displayProjectList}
