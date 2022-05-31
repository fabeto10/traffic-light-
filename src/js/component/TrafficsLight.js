import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { array } from "prop-types";
//include images into your bundle

//create your first component
export const TrafficsLight = () => {
	const [selectClass, setSelectClass] = useState("red");

	// const lights = document.querySelectorAll('.light')
	// let counter = 0
	// let arr = ["newRed","newYellow",'newGreen']
	// const evento = () => {
	// 	lights[counter].className = 'light'
	// 	counter++
	// 	if(counter > array.length) counter= 0;
	// 	const lightNow = lights[counter]
	// 	lightNow.classList.add(lightNow.getAttribute(arr))
	// }
	// setInterval(evento, 1000)

	return (
		<>
			<div className="holder"></div>
			<div className="base">
				<div
					onClick={() => {
						setSelectClass("red");
					}}
					className={`light ${
						selectClass === "red" ? "newRed" : "red"
					}`}></div>
				<div
					onClick={() => {
						setSelectClass("yellow");
					}}
					className={`light ${
						selectClass === "yellow" ? "newYellow" : "yellow"
					}`}></div>
				<div
					onClick={() => {
						setSelectClass("green");
					}}
					className={`light ${
						selectClass === "green" ? "newGreen" : "green"
					}`}></div>
			</div>
		</>
	);
};
