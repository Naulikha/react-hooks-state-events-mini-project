import React from "react";

function Task({ category, text, onDelete }) {
  function handleDelete() {
    onDelete(text);
  }


  return (
    <div className="task" key={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
