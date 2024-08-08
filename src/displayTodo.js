import { arrayTodo } from "."
import { changeCompleteStatus } from "./changeCompleteStatus";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./editTodo";
import { saveToStorage } from ".";

function displayTodo(arrayTodo)
{        
    const mainContent=document.querySelector(".main");
    mainContent.textContent="";
    if(arrayTodo.length===0)
        mainContent.textContent="There's Nothing Here!";

    // let i=0;
    arrayTodo.forEach(item => {
        const div=document.createElement("div");
        
        const checkMark=document.createElement("button");
        checkMark.classList.add("complete-mark");
        checkMark.textContent="✓";
        checkMark.setAttribute("id",`complete-${item.id}`);
        
        const deleteMark=document.createElement("button");
        deleteMark.classList.add("delete-mark");
        deleteMark.textContent=String.fromCodePoint(0x1F5D1);
        deleteMark.setAttribute("id",`delete-${item.id}`);

        div.classList.add("items");
        div.setAttribute("id",item.id);
        // i++;
        
        div.appendChild(checkMark);
        div.appendChild(deleteMark);
        
        mainContent.appendChild(div);
        
        for(let key in item)
        {
            if(key==="complete" || key==="project" || key==="id" )
            {
                if(item[key]===true)
                {
                    div.classList.add("complete");
                }
                continue;
            }
            if(key==="priority" && item[key]==="Urgent" && item.complete===false)
            {
                div.style.backgroundColor="pink";
            }
            const div2=document.createElement("div");
            div2.classList.add(key);
            // div2.contentEditable=true;
            div2.addEventListener("click",editTodo);
            div2.textContent=item[key];
            div.appendChild(div2);

        }
    })
    saveToStorage();
    callCheckMarkEventListener();
    callDeleteMarkEventListener();
    // callEditMarkEventListener();

}

function callCheckMarkEventListener()
{
    const items=document.querySelectorAll(".complete-mark");
    items.forEach(item =>
    {
        item.addEventListener("click",changeCompleteStatus);
    });
}

function callDeleteMarkEventListener()
{
    const items=document.querySelectorAll(".delete-mark");
    items.forEach(item =>
    {
        item.addEventListener("click",deleteTodo);
    });
}

export {displayTodo}