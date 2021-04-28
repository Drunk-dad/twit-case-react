import PropTypes from "prop-types";
import React from "react";

export const FileList = (props) => {
  const { files, onDelete } = props;
  return (
    <ul className="choise_list">
      {files.length > 0 &&
        files.map((file) => (
          <li key={file.name}>
						<img src={ URL.createObjectURL(file) } alt={ file.name } className="preview"/>
            <button
              type="button"
              className="delete_btn"
              onClick={() => onDelete(file.name)}
            >
              &times;
            </button>
          </li>
        ))}
    </ul>
  );
};

FileList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
