import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const api = {
	key: process.env.REACT_APP_API_KEY,
	base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState("");

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

	const appClassName =
		typeof weather.main != "undefined"
			? weather.main.temp > 18.5
				? "app warm"
				: "app"
			: "app";

	return (
		<div className={appClassName}>
			<main>
				<SearchBar
					onSearch={searchHandler}
					value={query}
					onKeyPress={search}
				></SearchBar>
				<WeatherDisplay weather={weather} />
			</main>
		</div>
	);
}

export default App;
