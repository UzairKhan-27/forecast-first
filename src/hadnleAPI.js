async function getLocation(city) {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=Q42L8M379A7KWKU3A6AMDPVFG`,
		{ mode: "cors" },
	);
	const whetherData = await response.json();
	console.log(whetherData);
	const whetherRecord = createWhetherObject(whetherData);
	return whetherRecord;
}

function createWhetherObject(whetherData) {
	// console.log(whetherData);
	// const whetherObject = {
	// 	temperature: whetherData.currentConditions.temp,
	// 	humidity: whetherData.currentConditions.humidity,
	// 	feelsLike: whetherData.currentConditions.feelslike,
	// 	currentTime: whetherData.currentConditions.datetime,
	// 	records: whetherData.days[0],
	// };
	// console.log(whetherObject);

	const whetherRecord = whetherData.days.map((day) => ({
		location: whetherData.resolvedAddress,
		temperature: day.temp,
		maxTemperature: day.tempmax,
		minTemperature: day.tempmin,
		humidity: day.humidity,
		feelsLike: day.feelslike,
		condition: day.conditions,
		description: day.description,
		icon: day.icon,
		dateTime: day.datetime,
	}));
	return whetherRecord;
}

export { getLocation };
