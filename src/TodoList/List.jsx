import Todo from "./Todo";
import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.affairs.map((affair) => {
        return (
          <Todo
            affair={affair}
            key={affair.id}
            CompleteAction={props.CompleteAction}
            deleteItem={props.deleteItem}
          />
        );
      })}
    </ul>
  );
};

export default List;
