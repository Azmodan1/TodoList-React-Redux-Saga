import React, { useState } from "react";
import "./App.css";
import List from "./TodoList/List";
import Addbusiness from "./TodoList/Addbusiness";

function App() {
  let [affairs, setAffairs] = useState([
    { id: 1, done: false, name: "Взять Лешрака" },
    { id: 2, done: false, name: "Пойти на мид" },
    { id: 3, done: false, name: "Выиграть мид" },
  ]);

  let [stylesColor, setStylesColor] = useState(["main"]);

  function deleteItem(id) {
    setAffairs(affairs.filter((affair) => affair.id !== id));
  }

  function OnlyMid(id) {
    setAffairs(
      affairs.map((affair) => {
        if (affair.id === id) {
          affair.done = !affair.done;
        }
        return affair;
      }),
      setTimeout(deleteItem, 1000, id)
    );
  }

  console.log(affairs);
  function addAffairs(name,) {
    setAffairs(
      affairs.concat([
        {
          name,
          id: affairs.length + 1,
          done: false,
        },
      ])
    );
  }

  function styles() {
    if (stylesColor == "main") {
      setStylesColor(stylesColor.splice(1, 1).concat("main2"));
    } else if (stylesColor == "main2") {
      setStylesColor(stylesColor.splice(1, 1).concat("main"));
    }
  }

  return (
    <div className={stylesColor.join(" ")}>
      <h1> Leshrac List</h1>
      <button className="addstyle" onClick={() => styles()}>
        Style
      </button>
      <Addbusiness create={addAffairs} />
      {affairs.length ? (
        <List
          affairs={affairs}
          CompleteAction={OnlyMid}
          Deleting={deleteItem}
        />
      ) : (
        <h1> GG WP</h1>
      )}
    </div>
  );
}
export default App;
