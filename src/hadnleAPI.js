async function getLocation(city) {
	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=Q42L8M379A7KWKU3A6AMDPVFG`,
		{ mode: "cors" },
	);
	const weatherData = await response.json();
	console.log(weatherData);
	const weatherRecord = createweatherObject(weatherData);
	return weatherRecord;
}

function createweatherObject(weatherData) {
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const weatherRecord = weatherData.days.map((day) => ({
		location: weatherData.resolvedAddress,
		temperature: day.temp,
		maxTemperature: day.tempmax,
		minTemperature: day.tempmin,
		humidity: day.humidity,
		feelsLike: day.feelslike,
		condition: day.conditions,
		description: day.description,
		icon: day.icon,
		dateTime: day.datetime,
		dayName: weekday[new Date(day.datetime).getDay()],
	}));
	return weatherRecord;
}

export { getLocation };
