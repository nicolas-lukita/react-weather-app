import React, { useState } from "react";

function MoreDetails(props) {
	const [detailsTextClass, setDetailsTextClass] = useState("details-text");
	const [detailsDataClass, setDetailsDataClass] = useState(
		"details-data hidden"
	);
	return (
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
					<dd>{props.weather.main.temp_min}°C</dd>
					<dt>Max Temp</dt>
					<dd>{props.weather.main.temp_max}°C</dd>
					<dt>Feels like</dt>
					<dd>{props.weather.main.feels_like}°C</dd>
					<dt>Humidity</dt>
					<dd>{props.weather.main.humidity}%</dd>
					<dt>Pressure</dt>
					<dd>{props.weather.main.pressure} hPa</dd>
					<dt>Cloudiness</dt>
					<dd>{props.weather.clouds.all} %</dd>
					<dt>Visibility</dt>
					<dd>{props.weather.visibility} m</dd>
				</dl>
			</div>
		</div>
	);
}

export default MoreDetails;
