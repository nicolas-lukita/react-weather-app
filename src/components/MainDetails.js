import React from "react";

function MainDetails(props) {
	var options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	let today = new Date();
	today = today.toLocaleDateString("en-US", options);

	return (
		<div>
			<div className="location-box">
				<div className="location">{props.weather.name}</div>
				<div className="date">{today}</div>
			</div>
			<div className="weather-box">
				<div className="temp">
					{(Math.round(props.weather.main.temp * 100) / 100).toFixed(1)}
					<span className="unit-icon">°C</span>
				</div>
				<div className="weather">{props.weather.weather[0].main}</div>
			</div>
		</div>
	);
}

export default MainDetails;
