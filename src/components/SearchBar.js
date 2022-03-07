import React from "react";

function SearchBar(props) {
	return (
		<div className="search-box">
			<input
				className="search-bar"
				type="text"
				placeholder="Search..."
				onChange={props.onSearch}
				value={props.value}
				onKeyPress={props.onKeyPress}
			></input>
		</div>
	);
}

export default SearchBar;
