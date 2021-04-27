import React, { useState } from "react";
import { Button } from "./button";
import { Counter } from "./counter";
import { InputFile } from "./inputFile";
import { InputText } from "./inputText";

export const Form = () => {
  const MAX_VALUE = 20;
	const [inputValue, setInputValue] = useState("");
	const [fileList, setFileList] = useState([]);
	


	const submitHandler = (event) =>{
		event.preventDefault();
		console.log( "inputText: " ,inputValue , "inputFiles: " , fileList )
		setFileList([]);
		setInputValue("");
	}

	return (
    <form className="form_twitt" onSubmit={ submitHandler }>
			<InputText
				value={ inputValue }
				onChange={ (event) => setInputValue(event.target.value) }
			/>
			<Counter
				maxValue={ MAX_VALUE }
				counterValue={ inputValue.length + fileList.length * 5 }
			/>
      <div className="input_file_wrp">
				<InputFile/>
				<Button/>
			</div>
    </form>
  );
};
