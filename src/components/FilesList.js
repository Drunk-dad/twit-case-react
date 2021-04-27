import React from "react";


export const FileList = (props) => {
  const { files, onDelete } = props;
  return (
    <ul className="choise_list">
      {files.length > 0 &&
        files.map((element, index) => (
          <li key={index}>
            <span>{element.name}</span>
            <button
              type="button"
              className="delete_btn"
              onClick={() => onDelete(index)}
            >
              &times;
            </button>
          </li>
        ))}
    </ul>
  );
};


