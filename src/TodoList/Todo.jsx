import React from "react";

const Todo = ({ affair, CompleteAction, deleteItem }) => {
  const leshracs = [];

  if (affair.done === true) {
    leshracs.push("easy");
  }

  return (
    <ul className="Todos">
      <span className={leshracs.join(" ")}>
        <input type="checkbox" onChange={() => CompleteAction(affair.id)} />
        <strong> {affair.id} </strong>
        {affair.name}
      </span>
      <button className="delete" onClick={() => deleteItem(affair.id)}>
        &times;
      </button>
    </ul>
  );
};

export default Todo;
