import React from "react";


export const FileList = (props) => {
  const { files, onDelete } = props;
  return (
    <ul className="choise_list">
      {files.length > 0 &&
        files.map((element) => (
          <li key={element.name}>
            <span>{element.name}</span>
            <button
              type="button"
              className="delete_btn"
              onClick={() => onDelete(element.name)}
            >
              &times;
            </button>
          </li>
        ))}
    </ul>
  );
};


