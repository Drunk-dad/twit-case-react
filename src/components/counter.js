import React from "react";

export const Counter = (props) => {
	const	{maxValue, counterValue} = props;
	return <span className="input_counter">{counterValue}/{maxValue}</span>
}