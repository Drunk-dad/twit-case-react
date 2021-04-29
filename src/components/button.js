import PropTypes from "prop-types";
import React from "react";

export const Button = (props) => {
  return (
    <button type="submit" className="form_btn" disabled={props.isDisabled}>
      Push
    </button>
  );
};
Button.propTypes = {
  isDisabled: PropTypes.bool,
};
