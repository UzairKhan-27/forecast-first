import { arrayTodo } from ".";
import { getLastCharacter } from "./changeCompleteStatus";
import { displayTodo } from "./displayTodo";
import { closeDialog, resetDialog, showDialog } from "./handleDialog";

function editTodo(event) {
    console.log("edit");
    console.log(event.target.parentNode.id);
    console.log(event.target.textContent);
    console.log(event.target.classList.value);

    let temp = event.target.textContent;
    let key = event.target.classList.value;

    // Handle priority separately
    if (key === "priority") {
        editPriority(event);
        return;
    }

    const userInput = document.createElement("input");

    if (key === "dueDate") {
        userInput.setAttribute("type", "date");
    } else {
        userInput.setAttribute("type", "text");
    }

    userInput.value = temp;

    // Clear the existing text content
    event.target.textContent = '';

    // Append the input element to the target
    event.target.appendChild(userInput);

    // Focus the input element for immediate editing
    userInput.focus();

    // Handle input blur to save the changes
    userInput.addEventListener("blur", () => {
        const parentId = getLastCharacter(event.target.parentNode.id);
        arrayTodo[parentId][key] = userInput.value;
        displayTodo(arrayTodo);
    });
}

export { editTodo };
