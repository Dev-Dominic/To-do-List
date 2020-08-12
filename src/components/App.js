import React from "react";
import "../styles/App.css";
import TodoList from "./TodoList.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <TodoList name="This is my todolist" />
      </div>
    );
  }
}

export default App;
