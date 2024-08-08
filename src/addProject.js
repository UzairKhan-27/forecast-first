import { showDialog } from "./handleDialog";
import { getLastCharacter } from "./changeCompleteStatus";
let lastButtonClicked=null;
function addProject(event)
{
    lastButtonClicked=getLastCharacter(event.target.id) ;
    showDialog();
}

export {addProject,lastButtonClicked}