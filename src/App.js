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

  function deleteItem(id) {
    setAffairs(affairs.filter((affairs) => affairs.id !== id));
  }

  function OnlyMid(id) {
    setAffairs(
      affairs.map((affairs) => {
        if (affairs.id === id) {
          affairs.done = !affairs.done;
        }
        return affairs;
      })
    );
  }

  function addAffairs(name) {
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

  return (
    <div className="main">
      <h1> Leshrac List</h1>
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
