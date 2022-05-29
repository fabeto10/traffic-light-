import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export const TrafficsLight = () => {
	const [selectColor, setSelectColor] = useState("");

	return (
		<>
			<div className="holder"></div>
			<div className="base">
				<div
					onClick={() => {
						setSelectColor("red");
					}}
					className={
						"light red" + (selectColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => {
						setSelectColor("yellow");
					}}
					className={
						"light yellow" +
						(selectColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => {
						setSelectColor("green");
					}}
					className={
						"light green" + (selectColor === "green" ? " glow" : "")
					}></div>
			</div>
		</>
	);
};
