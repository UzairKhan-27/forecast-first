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

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://forecast-first/./src/style.css?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attachEventListener: () => (/* binding */ attachEventListener),\n/* harmony export */   searchResult: () => (/* binding */ searchResult)\n/* harmony export */ });\n/* harmony import */ var _hadnleAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hadnleAPI */ \"./src/hadnleAPI.js\");\n\r\nlet searchResult;\r\nfunction attachEventListener() {\r\n\tconst submitSearch = document.querySelector(\"#submit\");\r\n\tsubmitSearch.addEventListener(\"click\", handleSearch);\r\n}\r\nasync function handleSearch(event) {\r\n\tevent.preventDefault();\r\n\tconst userSearch = document.querySelector(\"#search\");\r\n\tconsole.log(userSearch.value);\r\n\tsearchResult = await (0,_hadnleAPI__WEBPACK_IMPORTED_MODULE_0__.getLocation)(userSearch.value);\r\n\tconsole.log(searchResult);\r\n\tdisplayWeatherData();\r\n}\r\nlet degreeSymbol = \"\\u00B0\";\r\nfunction displayWeatherData(index = 0) {\r\n\tconsole.log(degreeSymbol);\r\n\r\n\tconst main = document.querySelector(\"main\");\r\n\tmain.textContent = \"\";\r\n\tconsole.log(searchResult[index]);\r\n\r\n\tconst day = document.createElement(\"div\");\r\n\t// day.setAttribute(\"id\", \"0\");\r\n\tday.classList.add(\"data\");\r\n\r\n\tconst location = document.createElement(\"div\");\r\n\tlocation.classList.add(\"location\");\r\n\tlocation.textContent = `${searchResult[index].location} , ${searchResult[index].dateTime} , ${searchResult[index].dayName} `;\r\n\r\n\tconst temperature = document.createElement(\"div\");\r\n\ttemperature.classList.add(\"temperature\");\r\n\ttemperature.textContent = `${searchResult[index].temperature}${degreeSymbol}C`;\r\n\r\n\tconst humidity = document.createElement(\"div\");\r\n\thumidity.classList.add(\"humidity\");\r\n\thumidity.textContent = `Humidity : ${searchResult[index].humidity}%`;\r\n\r\n\tconst maxTemperature = document.createElement(\"div\");\r\n\tmaxTemperature.classList.add(\"maxTemperature\");\r\n\tmaxTemperature.textContent = `High : ${searchResult[index].maxTemperature}${degreeSymbol}C`;\r\n\r\n\tconst minTemperature = document.createElement(\"div\");\r\n\tminTemperature.classList.add(\"minTemperature\");\r\n\tminTemperature.textContent = `Low : ${searchResult[index].minTemperature}${degreeSymbol}C`;\r\n\r\n\tconst feelsLike = document.createElement(\"div\");\r\n\tfeelsLike.classList.add(\"feelsLike\");\r\n\tfeelsLike.textContent = `Feels Like : ${searchResult[index].feelsLike}${degreeSymbol}C`;\r\n\r\n\tconst condition = document.createElement(\"div\");\r\n\tcondition.classList.add(\"condition\");\r\n\tcondition.textContent = `${searchResult[index].condition}`;\r\n\r\n\tconst img = document.createElement(\"img\");\r\n\timg.classList.add(\"icon\");\r\n\timg.src = `${searchResult[index].icon}.png`;\r\n\r\n\tconst containerDiv = document.createElement(\"div\");\r\n\tcontainerDiv.classList.add(\"weather-container\");\r\n\r\n\tconst containerDiv2 = document.createElement(\"div\");\r\n\tcontainerDiv2.classList.add(\"icon-condition\");\r\n\r\n\tday.appendChild(location);\r\n\r\n\tcontainerDiv2.appendChild(img);\r\n\tcontainerDiv2.appendChild(condition);\r\n\tday.appendChild(containerDiv2);\r\n\r\n\tday.appendChild(temperature);\r\n\r\n\tcontainerDiv.appendChild(feelsLike);\r\n\tcontainerDiv.appendChild(humidity);\r\n\tcontainerDiv.appendChild(minTemperature);\r\n\tcontainerDiv.appendChild(maxTemperature);\r\n\r\n\tday.appendChild(containerDiv);\r\n\r\n\tmain.appendChild(day);\r\n\tcreateButtons();\r\n\r\n\t// searchResult.forEach((search) => {   //THIS IS FOR ALL ARRAY\r\n\t// \tconsole.log(search);\r\n\t// \tfor (let key in search) {\r\n\t// \t\tif (key === \"icon\") {\r\n\t// \t\t\tconst img = document.createElement(\"img\");\r\n\t// \t\t\timg.src = `${search[key]}.png`;\r\n\t// \t\t\tmain.appendChild(img);\r\n\t// \t\t} else {\r\n\t// \t\t\tconst div2 = document.createElement(\"div\");\r\n\t// \t\t\tdiv2.textContent = search[key];\r\n\t// \t\t\tmain.appendChild(div2);\r\n\t// \t\t\tconsole.log(search[key]);\r\n\t// \t\t}\r\n\t// \t}\r\n\t// });\r\n}\r\n\r\nfunction createButtons() {\r\n\tconst main = document.querySelector(\"main\");\r\n\tconst buttonContainer = document.createElement(\"div\");\r\n\r\n\tlet i = 0;\r\n\tsearchResult.forEach((search) => {\r\n\t\tbuttonContainer.classList.add(\"button-container\");\r\n\r\n\t\tconst button = document.createElement(\"button\");\r\n\t\tbutton.textContent = search.dateTime;\r\n\t\tbutton.setAttribute(\"id\", i);\r\n\r\n\t\tconst dayName = document.createElement(\"span\");\r\n\t\tdayName.textContent = search.dayName;\r\n\r\n\t\tconst img = document.createElement(\"img\");\r\n\t\timg.classList.add(\"icon-smaller\");\r\n\t\timg.src = `${search.icon}.png`;\r\n\r\n\t\tconst temperature = document.createElement(\"div\");\r\n\t\ttemperature.textContent = `${search.temperature}${degreeSymbol}C`;\r\n\r\n\t\tbutton.appendChild(dayName);\r\n\t\tbutton.appendChild(img);\r\n\t\tbutton.appendChild(temperature);\r\n\t\tbuttonContainer.appendChild(button);\r\n\t\tmain.appendChild(buttonContainer);\r\n\t\ti++;\r\n\t});\r\n\tattachEventListenerOnDates();\r\n}\r\nfunction attachEventListenerOnDates() {\r\n\tlet index = 0;\r\n\tconst buttons = document.querySelectorAll(\"main button\");\r\n\tbuttons.forEach((button) => {\r\n\t\tbutton.addEventListener(\"click\", (event) => {\r\n\t\t\tindex = event.currentTarget.id;\r\n\t\t\tconsole.log(\"h\" + index);\r\n\t\t\tdisplayWeatherData(index);\r\n\t\t});\r\n\t});\r\n}\r\n\r\n\n\n//# sourceURL=webpack://forecast-first/./src/DOM.js?");

/***/ }),

/***/ "./src/hadnleAPI.js":
/*!**************************!*\
  !*** ./src/hadnleAPI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLocation: () => (/* binding */ getLocation)\n/* harmony export */ });\nasync function getLocation(city) {\r\n\tconst response = await fetch(\r\n\t\t`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=Q42L8M379A7KWKU3A6AMDPVFG`,\r\n\t\t{ mode: \"cors\" },\r\n\t);\r\n\tconst weatherData = await response.json();\r\n\tconsole.log(weatherData);\r\n\tconst weatherRecord = createweatherObject(weatherData);\r\n\treturn weatherRecord;\r\n}\r\n\r\nfunction createweatherObject(weatherData) {\r\n\tconst weekday = [\r\n\t\t\"Sunday\",\r\n\t\t\"Monday\",\r\n\t\t\"Tuesday\",\r\n\t\t\"Wednesday\",\r\n\t\t\"Thursday\",\r\n\t\t\"Friday\",\r\n\t\t\"Saturday\",\r\n\t];\r\n\tconst weatherRecord = weatherData.days.map((day) => ({\r\n\t\tlocation: weatherData.resolvedAddress,\r\n\t\ttemperature: day.temp,\r\n\t\tmaxTemperature: day.tempmax,\r\n\t\tminTemperature: day.tempmin,\r\n\t\thumidity: day.humidity,\r\n\t\tfeelsLike: day.feelslike,\r\n\t\tcondition: day.conditions,\r\n\t\tdescription: day.description,\r\n\t\ticon: day.icon,\r\n\t\tdateTime: day.datetime,\r\n\t\tdayName: weekday[new Date(day.datetime).getDay()],\r\n\t}));\r\n\treturn weatherRecord;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://forecast-first/./src/hadnleAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nconsole.log(\"hello forecast\");\r\n\r\n(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.attachEventListener)();\r\n\n\n//# sourceURL=webpack://forecast-first/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;