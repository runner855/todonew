import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [task, setTask] = useState();

  const Tasks = [
    { ass: "clean your room", done: true },
    { ass: "wash the plates", done: false },
    { ass: "wash the car", done: false },
  ];
  return (
    <div className="App">
      <div className="title">To Do List:</div>
      <div className="searchbar">
        <input
          placeholder="add task .."
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setTask(task)}>Add</button>
      </div>
      {Tasks.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.ass}</li>
          </ul>
        );
      })}
    </div>
  );
};
