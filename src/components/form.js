import React, { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { FileList } from "./FilesList";
import { InputFile } from "./InputFile";
import { InputText } from "./InputText";

export const Form = () => {
  const MAX_VALUE = 20;
	const [inputValue, setInputValue] = useState("");
	const [fileList, setFileList] = useState([]);

	const counter = inputValue.length + fileList.length * 5;

	const deleteFileHandler = (name) => {
		setFileList(fileList.filter((files) => files.name !== name)) 
	}


  const addFile = (event) => {
  	setFileList(Array.from(event.target.files))
  }

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
				counterValue={ counter }
			/>
      <div className="input_file_wrp">
				<InputFile onChange={ addFile }/>
				<FileList files={fileList} onDelete={deleteFileHandler}/>
				<Button isDisabled={ counter > MAX_VALUE || counter < 1} />
			</div>
    </form>
  );
};
