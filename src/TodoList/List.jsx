import Todo from "./Todo";
import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.affairs.map((item) => {
        return (
          <Todo
            item={item}
            key={item.id}
            actionSame={props.CompleteAction}
            destroy={props.Deleting}
          />
        );
      })}
    </ul>
  );
}
