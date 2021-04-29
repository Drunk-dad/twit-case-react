import PropTypes from "prop-types";
import React from "react";

export const InputText = (props) => {
  return (
    <div className="input_wrap">
      <input
        className={`form_input ${props.isError && "error_input"}`}
        type="text"
        placeholder="Дрочила228"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

InputText.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  isError: PropTypes.bool,
};
