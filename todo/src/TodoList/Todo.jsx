import React, { useState } from "react";

const Todo = ({ items, id, actionSame, destroy }) => {
  const leshracs = [];

  if (items.done) {
    leshracs.push("easy");
  }

  return (
    <ul className="Todos">
      <span className={leshracs.join(" ")}>
        <input type="checkbox" onChange={() => actionSame(items.id)} />
        <strong>{items.id}</strong>
        {items.name}
      </span>
      <button onClick={() => destroy(items.id)}>&times;</button>
    </ul>
  );
};

export default Todo;
