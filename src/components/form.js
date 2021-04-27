import React, { useState } from "react";
import { Button } from "./button";
import { InputFile } from "./inputFile";
import { InputText } from "./inputText";

export const Form = (props) => {

	
	return (
    <form className="form_twitt">
			<InputText/>
      <div className="input_file_wrp">
				<InputFile/>
				<Button/>
			</div>
    </form>
  );
};
