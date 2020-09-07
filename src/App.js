import React from "react";
import ToDoList from "./ToDoList";
import "./styles.css";

// this isthe best format/layout where we don't write any code in app.js
// file but call components- so its best to keep
// App.js file completely clean and minimal and have
// individual files/components write all the code.
const App = () => (
  <div className="App">
    <ToDoList />
  </div>
);
export default App;
