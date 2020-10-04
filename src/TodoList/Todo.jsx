import React from "react";

const Todo = ({ item, actionSame, destroy }) => {
  const leshracs = [];

  if (item.done === true) {
    leshracs.push("easy");
  }

  return (
    <ul className="Todos">
      <span className={leshracs.join(" ")}>
        <input type="checkbox" onChange={() => actionSame(item.id)} />
        <strong> {item.id} </strong>
        {item.name}
      </span>
      <button className="delete" onClick={() => destroy(item.id)}>
        &times;
      </button>
    </ul>
  );
};

export default Todo;
