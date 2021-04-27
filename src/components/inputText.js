import React from "react";

export const InputText = (props) => {
return(
	<div className="input_wrap">
		<input
			className="form_input"
			type="text"
			placeholder="Дрочила228"
			onChange={props.onChange}
			value={props.value}
		/>
	</div>
)
}