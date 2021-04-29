import PropTypes from "prop-types";
import React from "react";

export const InputFile = (props) => {
  return (
    <label className="file-label">
      <img
        src="https://www.pngrepo.com/png/255984/512/input.png"
        className="icon-file"
        alt="XyU"
      />
      <input
        className="input-file"
        type="file"
        multiple
        accept=".jpg,.jpeg,.png,.svg"
        onChange={props.onChange}
      />
    </label>
  );
};

InputFile.propTypes = {
  onChange: PropTypes.func,
};
