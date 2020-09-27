import React, { useState } from "react";
import "./App.css";
import List from "./TodoList/List";

function App() {
  let [affairs, setAffairs] = useState([
    { id: 1, done: false, name: "Взять Лешрака" },
    { id: 2, done: false, name: "Пойти на мид" },
    { id: 3, done: false, name: "Выиграть мид" },
  ]);

  function deleteItem(id){
    setAffairs(affairs.filter(affairs => affairs.id !== id))
  }

  function OnlyMid(id) {
    setAffairs(
      (affairs.map((affairs) => {
        if (affairs.id === id) {
          affairs.done = !affairs.done;
        }
        return affairs;
      }))
    );
  }

  return (
    <div className="main">
      <h1> Todolist</h1>
      <List affairs={affairs} CompleteAction={OnlyMid} Deleting={deleteItem} />
    </div>
  );
}
export default App;
