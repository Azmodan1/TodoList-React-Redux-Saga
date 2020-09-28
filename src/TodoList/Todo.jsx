import React from "react";

const Todo = ({ items, actionSame, destroy }) => {
  const leshracs = [];

  if (items.done) {
    leshracs.push("easy");
  }

  return (
    <ul className="Todos">
      <span className={leshracs.join(" ")}>
        <input type="checkbox" onChange={() => actionSame(items.id)} />
        <strong> {items.id} </strong>
        {items.name}
      </span>
      <button className="delete" onClick={() => destroy(items.id)}>
        &times;
      </button>
    </ul>
  );
};

export default Todo;
