import { getLocation } from "./hadnleAPI";
let searchResult;
function attachEventListener() {
	const submitSearch = document.querySelector("#submit");
	submitSearch.addEventListener("click", handleSearch);
}
async function handleSearch(event) {
	event.preventDefault();
	const userSearch = document.querySelector("#search");
	console.log(userSearch.value);
	searchResult = await getLocation(userSearch.value);
	console.log(searchResult);
	displayWhetherData();
}
function displayWhetherData() {
	let degreeSymbol = "\u00B0";
	console.log(degreeSymbol);

	const main = document.querySelector("main");
	main.textContent = "";
	console.log(searchResult[0]);

	const day = document.createElement("div");
	// day.setAttribute("id", "0");
	day.classList.add("data");

	const location = document.createElement("div");
	location.classList.add("location");
	location.textContent = `${searchResult[0].location} ,   ${searchResult[0].dateTime}`;

	const temperature = document.createElement("div");
	temperature.classList.add("temperature");
	temperature.textContent = `${searchResult[0].temperature}${degreeSymbol}F`;

	const humidity = document.createElement("div");
	humidity.classList.add("humidity");
	humidity.textContent = `Humidity : ${searchResult[0].humidity}${degreeSymbol}F`;

	const maxTemperature = document.createElement("div");
	maxTemperature.classList.add("maxTemperature");
	maxTemperature.textContent = `High : ${searchResult[0].maxTemperature}${degreeSymbol}F`;

	const minTemperature = document.createElement("div");
	minTemperature.classList.add("minTemperature");
	minTemperature.textContent = `Low : ${searchResult[0].minTemperature}${degreeSymbol}F`;

	const feelsLike = document.createElement("div");
	feelsLike.classList.add("feelsLike");
	feelsLike.textContent = `Feels Like : ${searchResult[0].feelsLike}${degreeSymbol}F`;

	const condition = document.createElement("div");
	condition.classList.add("condition");
	condition.textContent = `${searchResult[0].condition}`;

	const img = document.createElement("img");
	img.classList.add("icon");
	img.src = `${searchResult[0].icon}.png`;

	const containerDiv = document.createElement("div");
	containerDiv.classList.add("whether-container");

	const containerDiv2 = document.createElement("div");
	containerDiv2.classList.add("icon-condition");

	day.appendChild(location);

	containerDiv2.appendChild(img);
	containerDiv2.appendChild(condition);
	day.appendChild(containerDiv2);

	day.appendChild(temperature);

	containerDiv.appendChild(feelsLike);
	containerDiv.appendChild(humidity);
	containerDiv.appendChild(minTemperature);
	containerDiv.appendChild(maxTemperature);

	day.appendChild(containerDiv);

	main.appendChild(day);
	createButtons();

	// searchResult.forEach((search) => {   //THIS IS FOR ALL ARRAY
	// 	console.log(search);
	// 	for (let key in search) {
	// 		if (key === "icon") {
	// 			const img = document.createElement("img");
	// 			img.src = `${search[key]}.png`;
	// 			main.appendChild(img);
	// 		} else {
	// 			const div2 = document.createElement("div");
	// 			div2.textContent = search[key];
	// 			main.appendChild(div2);
	// 			console.log(search[key]);
	// 		}
	// 	}
	// });
}

function createButtons() {
	const main = document.querySelector("main");
	let i = 0;
	searchResult.forEach((search) => {
		const button = document.createElement("button");
		button.textContent = search.dateTime;
		button.setAttribute("id", i);
		main.appendChild(button);
		i++;
	});
	attachEventListenerOnDates();
}
function attachEventListenerOnDates() {
	let index = 0;
	const buttons = document.querySelectorAll("main button");
	buttons.forEach((button) => {
		button.addEventListener("click", (event) => {
			index = event.target.id;
			displayWhetherData(index);
		});
	});
}
export { attachEventListener, searchResult };
