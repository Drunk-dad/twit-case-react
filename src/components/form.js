import React from "react";
import { InputFile } from "./inputFile";
import { InputText } from "./inputText";

export const Form = (props) => {
  
	
	return (
    <form className="form_twitt">
			<InputText/>
      <div className="input_file_wrp">
				<InputFile/>
			</div>
    </form>
  );
};
