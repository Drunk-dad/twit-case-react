import React from "react";

export const InputFile = (proops) => {
  return (
    <label className="input_file_wrp file-label">
      <img
        src="https://www.pngrepo.com/png/255984/512/input.png"
        className="icon-file"
        alt="XyU"
      />
      <input className="input-file" type="file" multiple />
    </label>
  );
};
