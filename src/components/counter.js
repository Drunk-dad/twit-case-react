import React from "react";

export const Counter = (props) => {
	const	{maxValue, counterValue} = props;
	return (
		<>
		<span className="input_counter">{counterValue}/{maxValue}</span>
		{counterValue > maxValue && (
			<span className="error_span">*Превышено допустимое колличество симоволов</span>)}
		</>
	)
}