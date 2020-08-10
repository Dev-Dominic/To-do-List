import React from "react";
import "./App.css";
import TodoList from "../Todo-List/TodoList.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <TodoList name="This is my todolist" />
      </div>
    );
  }
}

export default App;
