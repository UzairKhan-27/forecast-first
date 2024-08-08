/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   lastButtonClicked: () => (/* binding */ lastButtonClicked)\n/* harmony export */ });\n/* harmony import */ var _handleDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDialog */ \"./src/handleDialog.js\");\n/* harmony import */ var _changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCompleteStatus */ \"./src/changeCompleteStatus.js\");\n\r\n\r\nlet lastButtonClicked=null;\r\nfunction addProject(event)\r\n{\r\n    lastButtonClicked=(0,_changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__.getLastCharacter)(event.target.id) ;\r\n    (0,_handleDialog__WEBPACK_IMPORTED_MODULE_0__.showDialog)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/addProject.js?");

/***/ }),

/***/ "./src/changeCompleteStatus.js":
/*!*************************************!*\
  !*** ./src/changeCompleteStatus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeCompleteStatus: () => (/* binding */ changeCompleteStatus),\n/* harmony export */   getLastCharacter: () => (/* binding */ getLastCharacter)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\nfunction changeCompleteStatus(event)\r\n{\r\n\r\n    let checkButtonID=getLastCharacter(event.target.id);\r\n    ___WEBPACK_IMPORTED_MODULE_0__.arrayTodo[checkButtonID].complete=!(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo[checkButtonID].complete);\r\n    (0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo);\r\n}\r\n\r\nfunction getLastCharacter(string)\r\n{\r\n    return string.split('-')[1];\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/changeCompleteStatus.js?");

/***/ }),

/***/ "./src/createNewProject.js":
/*!*********************************!*\
  !*** ./src/createNewProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjectList */ \"./src/displayProjectList.js\");\n\r\n\r\n\r\nfunction createNewProject(event)\r\n{\r\n    let user=prompt(\"Enter New Project Name\");\r\n    if (user.trim()===\"\"||user===null)\r\n        return;\r\n    ___WEBPACK_IMPORTED_MODULE_0__.arrayProjects.push(user);\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.saveToStorage)();\r\n    (0,_displayProjectList__WEBPACK_IMPORTED_MODULE_1__.displayProjectList)();\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/createNewProject.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title,description,priority,dueDate,project,id,complete=false)\r\n{\r\n    return{title,description,priority,dueDate,project,id,complete};\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/createTodo.js?");

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   submitDeleteProject: () => (/* binding */ submitDeleteProject)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\nlet string=\"\";\r\nfunction deleteProject(event)\r\n{\r\n    console.log(event.target.id)\r\n    const dialog=document.querySelector(\"#delete-project-dialog\");\r\n    const form=document.querySelector(\"#delete-project-form\");\r\n    const deleteButton=document.createElement(\"button\");\r\n    deleteButton.setAttribute(\"type\",\"submit\");\r\n    deleteButton.setAttribute(\"id\",\"#submit-delete-project\");\r\n    deleteButton.textContent=\"Delete Selected Projects\";\r\n    form.textContent=\"\";\r\n\r\n\r\n    ___WEBPACK_IMPORTED_MODULE_0__.arrayProjects.forEach((item)=>\r\n    {\r\n        const input=document.createElement(\"input\");\r\n        const label=document.createElement(\"label\");\r\n        const lineBreak=document.createElement(\"br\");\r\n\r\n        input.setAttribute(\"type\",\"checkbox\");\r\n        input.setAttribute(\"id\",item);\r\n        input.setAttribute(\"value\",item);\r\n        label.setAttribute(\"for\",item);\r\n        label.textContent=item;\r\n\r\n        form.appendChild(input);\r\n        form.appendChild(label);\r\n        form.appendChild(lineBreak);\r\n    })\r\n    form.appendChild(deleteButton);\r\n    deleteButton.addEventListener(\"click\",submitDeleteProject);\r\n\r\n    dialog.showModal();\r\n}\r\nfunction submitDeleteProject(event)\r\n{\r\n    event.preventDefault();\r\n\r\n    const dialog=document.querySelector(\"#delete-project-dialog\");\r\n    const form=document.querySelector(\"#delete-project-form\");\r\n    const options=form.querySelectorAll(\"input\");\r\n    let newArrayTodo;\r\n    let newProjectList;\r\n    options.forEach((option)=>{\r\n        console.log(option.id+option.checked);\r\n        string=option.id;\r\n        if(option.checked===true)\r\n        {\r\n            newArrayTodo=___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.filter(removeSelectedProjectTasks);\r\n            newProjectList=___WEBPACK_IMPORTED_MODULE_0__.arrayProjects.filter(removeProjectList);\r\n        }\r\n    })\r\n    dialog.close();\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.updateArrayTodo)(newArrayTodo);\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.updateArrayProjects)(newProjectList);\r\n    console.log(___WEBPACK_IMPORTED_MODULE_0__.arrayProjects+\"sweet\");\r\n    console.log(event.target.id);\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.saveToStorage)();\r\n    (0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo);\r\n}\r\nfunction removeProjectList(list)\r\n{\r\n    return string !==list;\r\n}\r\nfunction removeSelectedProjectTasks(todo)\r\n{\r\n    return string!==todo.project\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/deleteProject.js?");

/***/ }),

/***/ "./src/deleteTodo.js":
/*!***************************!*\
  !*** ./src/deleteTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCompleteStatus */ \"./src/changeCompleteStatus.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\n\r\n\r\nfunction deleteTodo(event)\r\n{\r\n    let deleteButtonID=(0,_changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__.getLastCharacter)(event.target.id);\r\n    console.log(\"event dlelet\" +event.target.id )\r\n    ___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.splice(deleteButtonID,1);\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.updateArrayTodoID)();\r\n    (0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodo)(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo);    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/deleteTodo.js?");

/***/ }),

/***/ "./src/dialogSubmission.js":
/*!*********************************!*\
  !*** ./src/dialogSubmission.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDialogSubmission: () => (/* binding */ handleDialogSubmission)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n/* harmony import */ var _handleDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleDialog */ \"./src/handleDialog.js\");\n/* harmony import */ var _updateProjectDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProjectDropdown */ \"./src/updateProjectDropdown.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction handleDialogSubmission(event)\r\n{\r\n    event.preventDefault();\r\n    let title=document.getElementById(\"title\").value;\r\n    let description=document.getElementById(\"description\").value;\r\n    let dueDate=document.getElementById(\"dueDate\").value;\r\n    let priority=document.getElementById(\"priority\").value;\r\n    let project=document.getElementById(\"option-project\").value;\r\n    if(title===\"\")\r\n    {\r\n        alert(\"Fill the title and Due Date\");\r\n        return;\r\n    }\r\n    description=(description.trim()===\"\") ? \"NO DESCRIPTION\": document.getElementById(\"description\").value\r\n    console.log(title);\r\n    console.log(description);\r\n    console.log(dueDate);\r\n    console.log(priority);\r\n    console.log(project);\r\n    (0,_handleDialog__WEBPACK_IMPORTED_MODULE_4__.closeDialog)(); \r\n    (0,_handleDialog__WEBPACK_IMPORTED_MODULE_4__.resetDialog)();\r\n    console.log(\"me button \"+_addProject__WEBPACK_IMPORTED_MODULE_1__.lastButtonClicked);\r\n    ___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.push((0,_createTodo__WEBPACK_IMPORTED_MODULE_2__.createTodo)(title,description,priority,dueDate,project,___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.length ));\r\n    console.log(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo)\r\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/dialogSubmission.js?");

/***/ }),

/***/ "./src/displayCompleteTodo.js":
/*!************************************!*\
  !*** ./src/displayCompleteTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCompleteTodo: () => (/* binding */ displayCompleteTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\nfunction displayCompleteTodo()\r\n{\r\n    const newArray=___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.filter(checkCompleteStatus);\r\n    console.log(newArray)\r\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(newArray);\r\n}\r\nfunction checkCompleteStatus(todo)\r\n{\r\n    return todo.complete===true;\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayCompleteTodo.js?");

/***/ }),

/***/ "./src/displayMissed.js":
/*!******************************!*\
  !*** ./src/displayMissed.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMissed: () => (/* binding */ displayMissed)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayToday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayToday */ \"./src/displayToday.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\n\r\nfunction displayMissed()\r\n{\r\n    const newArray=___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.filter(checkMissingStatus);\r\n    console.log(newArray)\r\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodo)(newArray);\r\n}\r\nfunction checkMissingStatus(todo)\r\n{\r\n    const today = new Date(Date.now());\r\n    const dueDate = new Date(todo.dueDate);\r\n    console.log(\"me so \"+dueDate);\r\n    console.log(today);\r\n    return dueDate < today && todo.complete===false;\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayMissed.js?");

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProject: () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\nlet projectName=\"\";\r\nfunction displayProject(event)\r\n{\r\n    console.log(event.target.id);\r\n    console.log(event.target.textContent);\r\n    projectName=event.target.textContent;\r\n    const newArray=___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.filter(findProjectTasks);\r\n    console.log(\"new array ++ \" + newArray);\r\n    (0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(newArray);\r\n\r\n}\r\nfunction findProjectTasks(todo)\r\n{\r\n    return todo.project===projectName\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayProject.js?");

/***/ }),

/***/ "./src/displayProjectList.js":
/*!***********************************!*\
  !*** ./src/displayProjectList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjectList: () => (/* binding */ displayProjectList)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _updateProjectDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProjectDropdown */ \"./src/updateProjectDropdown.js\");\n\r\n\r\nfunction displayProjectList()\r\n{\r\n    const list= document.querySelector(\".lists\")\r\n    list.textContent=\"\";\r\n    for(let i=0;i<___WEBPACK_IMPORTED_MODULE_0__.arrayProjects.length;i++){\r\n    const li=document.createElement(\"li\");\r\n    \r\n    li.setAttribute(\"id\",`list${i}`)\r\n    li.textContent=___WEBPACK_IMPORTED_MODULE_0__.arrayProjects[i];\r\n    list.appendChild(li);\r\n    console.log(___WEBPACK_IMPORTED_MODULE_0__.arrayProjects);\r\n    }\r\n    (0,_updateProjectDropdown__WEBPACK_IMPORTED_MODULE_1__.updateProjectDropdown)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayProjectList.js?");

/***/ }),

/***/ "./src/displayToday.js":
/*!*****************************!*\
  !*** ./src/displayToday.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayToday: () => (/* binding */ displayToday)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\nfunction displayToday()\r\n{\r\n    const newArray=___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.filter(checkDueDateStatus);\r\n    console.log(newArray)\r\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(newArray);\r\n}\r\nfunction checkDueDateStatus(todo)\r\n{\r\n\r\n    let currentDate=getTodayDate();\r\n    console.log(currentDate);\r\n\r\n    return todo.dueDate===currentDate && todo.complete===false;\r\n}\r\nfunction getTodayDate()\r\n{\r\n    const date = new Date();\r\n    let day = date.getDate();\r\n    let month = date.getMonth() + 1;\r\n    let year = date.getFullYear();\r\n    day = day < 10 ? '0' + day : day;\r\n    month = month < 10 ? '0' + month : month;\r\n    return `${year}-${month}-${day}`;\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayToday.js?");

/***/ }),

/***/ "./src/displayTodo.js":
/*!****************************!*\
  !*** ./src/displayTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTodo: () => (/* binding */ displayTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCompleteStatus */ \"./src/changeCompleteStatus.js\");\n/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTodo */ \"./src/deleteTodo.js\");\n/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTodo */ \"./src/editTodo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction displayTodo(arrayTodo)\r\n{        \r\n    const mainContent=document.querySelector(\".main\");\r\n    mainContent.textContent=\"\";\r\n    if(arrayTodo.length===0)\r\n        mainContent.textContent=\"There's Nothing Here!\";\r\n\r\n    // let i=0;\r\n    arrayTodo.forEach(item => {\r\n        const div=document.createElement(\"div\");\r\n        \r\n        const checkMark=document.createElement(\"button\");\r\n        checkMark.classList.add(\"complete-mark\");\r\n        checkMark.textContent=\"✓\";\r\n        checkMark.setAttribute(\"id\",`complete-${item.id}`);\r\n        \r\n        const deleteMark=document.createElement(\"button\");\r\n        deleteMark.classList.add(\"delete-mark\");\r\n        deleteMark.textContent=String.fromCodePoint(0x1F5D1);\r\n        deleteMark.setAttribute(\"id\",`delete-${item.id}`);\r\n\r\n        div.classList.add(\"items\");\r\n        div.setAttribute(\"id\",item.id);\r\n        // i++;\r\n        \r\n        div.appendChild(checkMark);\r\n        div.appendChild(deleteMark);\r\n        \r\n        mainContent.appendChild(div);\r\n        \r\n        for(let key in item)\r\n        {\r\n            if(key===\"complete\" || key===\"project\" || key===\"id\" )\r\n            {\r\n                if(item[key]===true)\r\n                {\r\n                    div.classList.add(\"complete\");\r\n                }\r\n                continue;\r\n            }\r\n            if(key===\"priority\" && item[key]===\"Urgent\" && item.complete===false)\r\n            {\r\n                div.style.backgroundColor=\"pink\";\r\n            }\r\n            const div2=document.createElement(\"div\");\r\n            div2.classList.add(key);\r\n            // div2.contentEditable=true;\r\n            div2.addEventListener(\"click\",_editTodo__WEBPACK_IMPORTED_MODULE_3__.editTodo);\r\n            div2.textContent=item[key];\r\n            div.appendChild(div2);\r\n\r\n        }\r\n    })\r\n    ;(0,___WEBPACK_IMPORTED_MODULE_0__.saveToStorage)();\r\n    callCheckMarkEventListener();\r\n    callDeleteMarkEventListener();\r\n    // callEditMarkEventListener();\r\n\r\n}\r\n\r\nfunction callCheckMarkEventListener()\r\n{\r\n    const items=document.querySelectorAll(\".complete-mark\");\r\n    items.forEach(item =>\r\n    {\r\n        item.addEventListener(\"click\",_changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__.changeCompleteStatus);\r\n    });\r\n}\r\n\r\nfunction callDeleteMarkEventListener()\r\n{\r\n    const items=document.querySelectorAll(\".delete-mark\");\r\n    items.forEach(item =>\r\n    {\r\n        item.addEventListener(\"click\",_deleteTodo__WEBPACK_IMPORTED_MODULE_2__.deleteTodo);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayTodo.js?");

/***/ }),

/***/ "./src/displayUpcoming.js":
/*!********************************!*\
  !*** ./src/displayUpcoming.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayUpcoming: () => (/* binding */ displayUpcoming)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayToday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayToday */ \"./src/displayToday.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n\r\n\r\n\r\n\r\nfunction displayUpcoming()\r\n{\r\n    const newArray=___WEBPACK_IMPORTED_MODULE_0__.arrayTodo.filter(checkUpcomingStatus);\r\n    console.log(newArray)\r\n    ;(0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodo)(newArray);\r\n}\r\n\r\nfunction checkUpcomingStatus(todo) \r\n{\r\n    const today = new Date(Date.now());\r\n    const sevenDaysAhead = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\r\n    const dueDate = new Date(todo.dueDate);\r\n    console.log(\"me so \"+dueDate);\r\n    console.log(today);\r\n    console.log(sevenDaysAhead);\r\n    return dueDate >= today && dueDate <= sevenDaysAhead && todo.complete===false;\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/displayUpcoming.js?");

/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editTodo: () => (/* binding */ editTodo)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCompleteStatus */ \"./src/changeCompleteStatus.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n/* harmony import */ var _handleDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleDialog */ \"./src/handleDialog.js\");\n\r\n\r\n\r\n\r\n\r\nfunction editTodo(event) {\r\n    console.log(\"edit\");\r\n    console.log(event.target.parentNode.id);\r\n    console.log(event.target.textContent);\r\n    console.log(event.target.classList.value);\r\n\r\n    let temp = event.target.textContent;\r\n    let key = event.target.classList.value;\r\n\r\n    // Handle priority separately\r\n    if (key === \"priority\") {\r\n        editPriority(event);\r\n        return;\r\n    }\r\n\r\n    const userInput = document.createElement(\"input\");\r\n\r\n    if (key === \"dueDate\") {\r\n        userInput.setAttribute(\"type\", \"date\");\r\n    } else {\r\n        userInput.setAttribute(\"type\", \"text\");\r\n    }\r\n\r\n    userInput.value = temp;\r\n\r\n    // Clear the existing text content\r\n    event.target.textContent = '';\r\n\r\n    // Append the input element to the target\r\n    event.target.appendChild(userInput);\r\n\r\n    // Focus the input element for immediate editing\r\n    userInput.focus();\r\n\r\n    // Handle input blur to save the changes\r\n    userInput.addEventListener(\"blur\", () => {\r\n        const parentId = (0,_changeCompleteStatus__WEBPACK_IMPORTED_MODULE_1__.getLastCharacter)(event.target.parentNode.id);\r\n        ___WEBPACK_IMPORTED_MODULE_0__.arrayTodo[parentId][key] = userInput.value;\r\n        (0,_displayTodo__WEBPACK_IMPORTED_MODULE_2__.displayTodo)(___WEBPACK_IMPORTED_MODULE_0__.arrayTodo);\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/editTodo.js?");

/***/ }),

/***/ "./src/handleDialog.js":
/*!*****************************!*\
  !*** ./src/handleDialog.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeDialog: () => (/* binding */ closeDialog),\n/* harmony export */   resetDialog: () => (/* binding */ resetDialog),\n/* harmony export */   showDialog: () => (/* binding */ showDialog)\n/* harmony export */ });\nfunction showDialog()\r\n{\r\n    resetDialog();\r\n    const dialog=document.querySelector(\"dialog\");\r\n    dialog.showModal();   \r\n}\r\nfunction closeDialog()\r\n{\r\n    const dialog=document.querySelector(\"dialog\");\r\n    dialog.close();   \r\n}\r\nfunction resetDialog()\r\n{\r\n    document.getElementById(\"title\").value=\"\";\r\n    document.getElementById(\"description\").value=\"\";\r\n    document.getElementById(\"dueDate\").value=\"2011-09-29\"\r\n    document.getElementById(\"priority\").value=\"Normal\";\r\n    document.getElementById(\"option-project\").value=\"Default\"\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/handleDialog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayProjects: () => (/* binding */ arrayProjects),\n/* harmony export */   arrayTodo: () => (/* binding */ arrayTodo),\n/* harmony export */   loadFromStorage: () => (/* binding */ loadFromStorage),\n/* harmony export */   saveToStorage: () => (/* binding */ saveToStorage),\n/* harmony export */   updateArrayProjects: () => (/* binding */ updateArrayProjects),\n/* harmony export */   updateArrayTodo: () => (/* binding */ updateArrayTodo),\n/* harmony export */   updateArrayTodoID: () => (/* binding */ updateArrayTodoID)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _dialogSubmission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogSubmission */ \"./src/dialogSubmission.js\");\n/* harmony import */ var _displayTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodo */ \"./src/displayTodo.js\");\n/* harmony import */ var _handleDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleDialog */ \"./src/handleDialog.js\");\n/* harmony import */ var _displayCompleteTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayCompleteTodo */ \"./src/displayCompleteTodo.js\");\n/* harmony import */ var _displayToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayToday */ \"./src/displayToday.js\");\n/* harmony import */ var _displayUpcoming_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayUpcoming.js */ \"./src/displayUpcoming.js\");\n/* harmony import */ var _displayMissed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayMissed */ \"./src/displayMissed.js\");\n/* harmony import */ var _updateProjectDropdown_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./updateProjectDropdown.js */ \"./src/updateProjectDropdown.js\");\n/* harmony import */ var _createNewProject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createNewProject.js */ \"./src/createNewProject.js\");\n/* harmony import */ var _displayProject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./displayProject.js */ \"./src/displayProject.js\");\n/* harmony import */ var _deleteProject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deleteProject.js */ \"./src/deleteProject.js\");\n/* harmony import */ var _displayProjectList_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./displayProjectList.js */ \"./src/displayProjectList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet arrayTodo=[];\r\nlet arrayProjects=[\"Default\"];\r\n(0,_updateProjectDropdown_js__WEBPACK_IMPORTED_MODULE_9__.updateProjectDropdown)();\r\nfunction updateArrayTodo(newArray) {\r\n    arrayTodo = newArray;\r\n}\r\nfunction updateArrayProjects(newArray) {\r\n    arrayProjects = newArray;\r\n    // updateProjectDropdown();\r\n    (0,_displayProjectList_js__WEBPACK_IMPORTED_MODULE_13__.displayProjectList)();\r\n}\r\nfunction updateArrayTodoID()\r\n{\r\n    let i=0;\r\n    arrayTodo.forEach(item=>{\r\n\r\n        item.id=i;\r\n        i++;\r\n    })\r\n}\r\nfunction loadFromStorage()\r\n{\r\n    arrayTodo = JSON.parse(localStorage.getItem('arrayTodo')) || [];\r\n    arrayProjects = JSON.parse(localStorage.getItem('arrayProjects')) || []\r\n}\r\n\r\nfunction saveToStorage()\r\n{\r\n    // Save the updated array back to localStorage\r\n    localStorage.setItem('arrayTodo', JSON.stringify(arrayTodo));\r\n    localStorage.setItem('arrayProjects', JSON.stringify(arrayProjects));\r\n}\r\n\r\n// saveToStorage();\r\nloadFromStorage();\r\n(0,_displayTodo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(arrayTodo);\r\n(0,_displayProjectList_js__WEBPACK_IMPORTED_MODULE_13__.displayProjectList)();\r\n\r\n\r\n\r\n\r\n\r\nconst projectList=document.querySelector(\".lists\");\r\nconsole.log(projectList);\r\nprojectList.addEventListener(\"click\",_displayProject_js__WEBPACK_IMPORTED_MODULE_11__.displayProject);\r\n\r\nconst newTask=document.querySelector(\"#new-task\");\r\nnewTask.addEventListener(\"click\",_addProject__WEBPACK_IMPORTED_MODULE_1__.addProject);\r\n\r\nconst newProject=document.querySelector(\"#new-project\");\r\nnewProject.addEventListener(\"click\",_createNewProject_js__WEBPACK_IMPORTED_MODULE_10__.createNewProject);\r\n\r\nconst submitButton=document.querySelector(\"#submit\");\r\nsubmitButton.addEventListener(\"click\",_dialogSubmission__WEBPACK_IMPORTED_MODULE_2__.handleDialogSubmission);\r\n\r\nconst inbox=document.querySelector(\"#inbox\");\r\ninbox.addEventListener(\"click\", ()=>(0,_displayTodo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(arrayTodo));\r\n\r\ndocument.querySelector('dialog').addEventListener('close', _handleDialog__WEBPACK_IMPORTED_MODULE_4__.resetDialog);\r\n\r\nconst completed=document.querySelector(\"#completed\");\r\ncompleted.addEventListener(\"click\",_displayCompleteTodo__WEBPACK_IMPORTED_MODULE_5__.displayCompleteTodo)\r\n\r\nconst today=document.querySelector(\"#today\");\r\ntoday.addEventListener(\"click\",_displayToday__WEBPACK_IMPORTED_MODULE_6__.displayToday);\r\n\r\nconst upcoming=document.querySelector(\"#upcoming\");\r\nupcoming.addEventListener(\"click\",_displayUpcoming_js__WEBPACK_IMPORTED_MODULE_7__.displayUpcoming);\r\n\r\nconst missed=document.querySelector(\"#missed\");\r\nmissed.addEventListener(\"click\",_displayMissed__WEBPACK_IMPORTED_MODULE_8__.displayMissed);\r\n\r\nconst deleteProjectButton=document.querySelector(\"#delete-project\");\r\ndeleteProjectButton.addEventListener(\"click\",_deleteProject_js__WEBPACK_IMPORTED_MODULE_12__.deleteProject);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/updateProjectDropdown.js":
/*!**************************************!*\
  !*** ./src/updateProjectDropdown.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateProjectDropdown: () => (/* binding */ updateProjectDropdown)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nfunction updateProjectDropdown()\r\n{\r\n    const projectList=document.querySelector(\"#option-project\");\r\n    projectList.textContent=\"\";\r\n    for(let i=0;i<___WEBPACK_IMPORTED_MODULE_0__.arrayProjects.length;i++)\r\n    {\r\n        const option=document.createElement(\"option\");\r\n        option.textContent=___WEBPACK_IMPORTED_MODULE_0__.arrayProjects[i];\r\n        projectList.appendChild(option);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/updateProjectDropdown.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;