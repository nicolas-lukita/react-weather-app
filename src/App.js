import React, { useState } from "react";

const api = {
	key: "fa5a26b4083eaf1ce518452f222ef973",
	base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState("");

	const [detailsTextClass, setDetailsTextClass] = useState("details-text");
	const [detailsDataClass, setDetailsDataClass] = useState(
		"details-data hidden"
	);

	function search(event) {
		if (event.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then((result) => result.json())
				.then((result) => {
					setWeather(result);
					setQuery("");
					console.log(result);
				});
		}
	}

	function searchHandler(event) {
		setQuery(event.target.value);
	}

	var options = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	let today = new Date();
	today = today.toLocaleDateString("en-US", options);

	const appClassName =
		typeof weather.main != "undefined"
			? weather.main.temp > 18.5
				? "app warm"
				: "app"
			: "app";

	const displayWeather =
		typeof weather.main != "undefined" ? (
			<>
				<div className="location-box">
					<div className="location">{weather.name}</div>
					<div className="date">{today}</div>
				</div>
				<div className="weather-box">
					<div className="temp">
						{(Math.round(weather.main.temp * 100) / 100).toFixed(1)}
						<span className="unit-icon">°C</span>
					</div>
					<div className="weather">{weather.weather[0].main}</div>
				</div>
				<div className="more-details">
					<div
						className={detailsTextClass}
						onClick={() => {
							setDetailsDataClass("details-data");
							setDetailsTextClass("details-text hidden");
						}}
					>
						Tap for more details
					</div>
					<div
						className={detailsDataClass}
						onClick={() => {
							setDetailsDataClass("details-data hidden");
							setDetailsTextClass("details-text");
						}}
					>
						<dl>
							<dt>Min Temp</dt>
							<dd>{weather.main.temp_min}°C</dd>
							<dt>Max Temp</dt>
							<dd>{weather.main.temp_max}°C</dd>
							<dt>Feels like</dt>
							<dd>{weather.main.feels_like}°C</dd>
							<dt>Humidity</dt>
							<dd>{weather.main.humidity}%</dd>
							<dt>Pressure</dt>
							<dd>{weather.main.pressure} hPa</dd>
							<dt>Cloudiness</dt>
							<dd>{weather.clouds.all} %</dd>
							<dt>Visibility</dt>
							<dd>{weather.visibility} m</dd>
						</dl>
					</div>
				</div>
			</>
		) : (
			""
		);

	return (
		<div className={appClassName}>
			<main>
				<div className="search-box">
					<input
						className="search-bar"
						type="text"
						placeholder="Search..."
						onChange={searchHandler}
						value={query}
						onKeyPress={search}
					></input>
				</div>
				{displayWeather}
			</main>
		</div>
	);
}

export default App;
