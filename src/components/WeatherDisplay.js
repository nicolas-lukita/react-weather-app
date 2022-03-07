import React from "react";
import MoreDetails from "./MoreDetails";
import MainDetails from "./MainDetails";

function WeatherDisplay(props) {
	if (typeof props.weather.main != "undefined") {
		return (
			<>
				<MainDetails weather={props.weather} />
				<MoreDetails weather={props.weather} />
			</>
		);
	} else {
		return "";
	}
}

export default WeatherDisplay;
