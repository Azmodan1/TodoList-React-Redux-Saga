import Todo from "./Todo";
import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.affairs.map(items => {
        return (
          <Todo
            items={items}
            key={items.id}
            actionSame={props.CompleteAction}
            destroy={props.Deleting}
          />
        );
      })}
    </ul>
  );
}
